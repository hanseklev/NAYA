import { Link, navigate } from "gatsby"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { ShopContext } from "../../context/shop-context"
import { formatCheckoutData } from "../../lib/utils"
import Button from "../_shared/button"
import { useFormFields, useStep } from "../_shared/hooks"
import { validateStep } from "../_shared/validate-form"
import { PersonDetails, ShippingDetails } from "./form-steps"

const steps = [
  { id: "personal", submit: "Shipping >>", hasBackButton: true },
  { id: "shipping", submit: "Betaling >>", hasBackButton: true },
  { id: "payment", hasBackButton: true },
  { id: "redirect" },
  { id: "confirmation" },
]

const CheckoutForm = ({ onSubmit, order }) => {
  const { setOpenCart } = useContext(ShopContext)
  const { step, navigation } = useStep({
    initialStep: 0,
    steps,
  })
  const [error, setError] = useState(null)
  const { formFields, createChangeHandler } = useFormFields({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
    paymentMethod: "vipps",
  })

  function handlePayment() {
    if (step.id === "payment") {
      const formatData = formatCheckoutData(formFields)
      onSubmit(formatData)
    }
  }

  function handleSubmit(e) {
    e && e.preventDefault()
    if (step.id === "payment") return
    setError("")
    const { errorType, errorMessage, isValid } = validateStep(
      step.id,
      formFields
    )

    if (!isValid) {
      document.querySelector(`input[name=${errorType}`).focus()
      setError(errorMessage)
    } else navigation.next(e)
  }

  function handleGoBack(e) {
    e.preventDefault()
    if (step.id === "personal") {
      setOpenCart(true)
      navigate("/shop")
    } else navigation.prev(e)
  }

  function renderStep({ id, submit }) {
    switch (id) {
      case "personal": //onClick={e => navigation.prev(e)}
        return (
          <PersonDetails
            title="Personlig info"
            submit={submit}
            form={formFields}
            error={error}
            onChange={createChangeHandler}
          />
        )
      case "shipping":
        return (
          <ShippingDetails
            title="Leveringsadresse"
            submit={submit}
            error={error}
            form={formFields}
            onChange={createChangeHandler}
          />
        )
      case "payment":
        return (
          <div>
            <h1>Betaling</h1>
            <Button
              type="submit"
              vipps={true}
              onClick={() => handlePayment()}
            />
            <p>
              Ved å fortsette godtar du våre
              <Link to="/general-terms" target="_blank">
                kjøpsvilkår
              </Link>
              og bekrefter at du har lest vår
              <Link to="/privacy-policy" target="_blank">
                privacy policy
              </Link>
            </p>
          </div>
        )
      case "redirect":
        console.log(order)
        /*  function hei() {
          if (!order.isCompleted)
            return (
              <div>
                <p>Fake innlasting...</p>
                <Loader />
              </div>
            ) 
          //else return setStepById("confirmation")
        }*/
        break

      case "confirmation":
        return (
          <div>
            <p>Ordre {order.orderId} er plassert!!</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Container>
      <FormNavigation step={step} onClick={e => handleGoBack(e)} />
      <div className="innerflex">
        <Form onSubmit={handleSubmit}>{renderStep(step)}</Form>
      </div>
    </Container>
  )
}

export default CheckoutForm

const FormNavigation = ({ step, ...props }) => {
  if (!step.hasBackButton) return null

  return (
    <nav style={{ marginBottom: "2rem", height: "2rem" }}>
      <Button label="Tilbake" goBack {...props} />
    </nav>
  )
}

const Form = styled.form`
  width: 250px;

  & fieldset {
    margin: 0 auto;
    padding-bottom: 2rem;
  }

  .formtitle {
    font-size: 20px;
    margin-bottom: 2rem;
    font-family: var(--color-text);
    text-transform: uppercase;
    text-align: center;
  }
`

const Container = styled.div`
  min-height: calc(100vh - 60px);
  padding: 1rem 2rem;

  .innerflex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
`
/*
  align-content: space-around;

width: 100%;
  height: 100%;
  padding-left: 1.45rem;
  padding-right: 1.45rem;*/
