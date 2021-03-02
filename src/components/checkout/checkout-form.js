import { navigate } from "gatsby"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { ShopContext } from "../../context/shop-context"
import { formatCheckoutData } from "../../lib/utils"
import Button from "../_shared/button"
import { ContentContainer } from "../_shared/container"
import { useFormFields, useStep } from "../_shared/hooks"
import { Loader } from "../_shared/loader"
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
  const {setOpenCart} = useContext(ShopContext)
  const { step, navigation, setStepById } = useStep({
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
    //navigation.next()
  }

  function handleSubmit(e) {
    e && e.preventDefault()
    if (step.id === "payment") return
    setError("")
    if (step.id === "personal" || step.id === "shipping") {
      const { errorType, errorMessage, isValid } = validateStep(
        step.id,
        formFields
      )
      if (!isValid) {
        console.log(errorType)
        console.log(errorMessage)
        document.querySelector(`input[name=${errorType}`).focus()
        setError(errorMessage)
      } else navigation.next(e)
    } else navigation.next(e)
  }

  function handleGoBack(e) {
    e.preventDefault()
    if (step.id === "personal") {
      setOpenCart(true)
      navigate('/shop')
      
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
            <p>Dette er en disclaimer</p>
          </div>
        )
      case "redirect":
        console.log(order)
        function hei() {
          if (!order.isCompleted)
            return (
              <div>
                <p>Fake innlasting...</p>
                <Loader />
              </div>
            )
          else return setStepById("confirmation")
        } /* setTimeout(() => {
          
        }, 3500) */
        hei()
        break

      case "confirmation":
        return (
          <div>
            <p>Ordre {order.orderId} er plassert!!</p>
          </div>
        )
      default:
        return <p>ops</p>
    }
  }

  return (
    <ContentContainer>
      <FormNavigation step={step} onClick={e => handleGoBack(e)} />
      <Form onSubmit={handleSubmit}>{renderStep(step)}</Form>
    </ContentContainer>
  )
}

export default CheckoutForm

const FormNavigation = ({ step, ...props }) => {
  if (!step.hasBackButton) return null

  return (
    <nav style={{ marginBottom: "2rem", height: "2rem" }}>
      <Button goBack {...props} />
    </nav>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
`
/*
width: 100%;
  height: 100%;
  padding-left: 1.45rem;
  padding-right: 1.45rem;*/