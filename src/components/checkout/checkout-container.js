import { useMutation, useQuery } from "@apollo/client"
import React, { useContext } from "react"
import Cookie from "js-cookie"
import { CHECKOUT_MUTATION } from "../../mutations/checkout"
import CheckoutForm from "./checkout-form"
import { formatCart } from "../../lib/utils"
import { GET_CART2 } from "../../queries/get-cart"
import { ShopContext } from "../../context/shop-context"

const CheckoutContainer = () => {
  const { setCart } = useContext(ShopContext)

  const { data, refetch } = useQuery(GET_CART2, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      console.log(data)
      const formattedCart = formatCart(data)
      console.log("formatted", formattedCart)
      Cookie.set("naya_cart", JSON.stringify(formattedCart))
      setCart(formattedCart)
    },
  })

  const [checkout, {data: orderData ,error }] = useMutation(CHECKOUT_MUTATION, {
    onCompleted: () => {
      if (error) {
        console.log("completed", error)
      }
      console.log("detta gikk braa")
      refetch()
    },
    onError: error => {
      console.log(error)
    },
  })

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

  return <CheckoutForm onSubmit={data => handlePayment(data)} order={orderData} />
}

export default CheckoutContainer
