import { useMutation } from "@apollo/client"
import React from "react"
import { CHECKOUT_MUTATION } from "../../mutations/checkout"
import CheckoutForm from "./checkout-form"

const CheckoutContainer = () => {
  //const [, setCart] = useContext(ShopContext)
  const [checkout] = useMutation(CHECKOUT_MUTATION)
  
  //const { cart } = useQuery(GET_CART)
  //const CART_TOTAL = cart && cart.total

  async function handlePayment(customerData) {
    console.log(customerData)

    const { data, errors } = await checkout({
      variables: {
        input: customerData,
      },
    })

    if (errors) {
      console.log(errors)
      alert("Det skjedde en feil")
      return
    }

    console.log(data)
    const redirectUrl = data.checkout && data.checkout.redirect
    console.log(redirectUrl)

    if (redirectUrl) {
      setTimeout(() => {
        window.location = redirectUrl
      }, 150)
    }
  }

  return <CheckoutForm onSubmit={data => handlePayment(data)} />
}

export default CheckoutContainer
