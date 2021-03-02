import React from "react"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"

const StripePayment = ({ handlePayment }) => {
  const stripe = useStripe(null)
  const elements = useElements()

  async function handleStripe() {
    if (!stripe || !elements) return

    const cardElement = elements.getElement(CardElement)
    const response = await fetch("http://localhost:3000/secret", {
      headers: { "Content-Type": "application/json" },
    })
    const { client_secret: clientSecret } = await response.json()

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: firstName.concat(" ").concat(lastName),
        },
      },
    })
    console.log(result)

    if (result.error) alert("Ikke nok penger på kortet..")
    else {
      if (result.paymentIntent.status === "succeeded")
        alert("Betalingen var vellykket!")
    }

    return result
  }

  function handlePayment() {
    if (!stripe || !elements) return

    const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    })

    error
      ? console.log("error:", error)
      : console.log("Betaling", paymentMethod)

    return { error, paymentMethod }
  }

  return (
    <div>
      <CardElement />
    </div>
  )
}

export default StripePayment
/* 
const Payment = () => {
  return (
    <>
      <CardElement
        options={{
          hidePostalCode: true,
        }}
      />

      <button disabled={!stripe}>Betal nå</button>
    </>
  )
} */
