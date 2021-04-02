import { useMutation, useQuery } from "@apollo/client"
import React, { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
import { getFormattedCart } from "../../lib/cart-utils"
import { CHECKOUT_MUTATION } from "../../mutations/checkout"
import { GET_CART_QUERY } from "../../queries/get-cart"
import CheckoutForm from "./checkout-form"

const CheckoutContainer = () => {
  const { setCart } = useContext(ShopContext)

  const { data, refetch } = useQuery(GET_CART_QUERY, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      const formattedCart = getFormattedCart(data)

      localStorage.setItem("naya-cart", JSON.stringify(formattedCart))
      setCart(formattedCart)
    },
  })

  const [checkout, {loading}] = useMutation(CHECKOUT_MUTATION, {
    onCompleted: () => {
      //refetch()
    },
    onError: error => {
      if (error.graphQLErrors) alert(error.graphQLErrors[0]?.message)
      else alert(error)
    },
  })

  async function handlePayment(customerData) {
    const { data } = await checkout({
      variables: {
        input: customerData,
      },
    })

    const redirectUrl = data.checkout && data.checkout.redirect
   // console.log(redirectUrl)

    if (redirectUrl) {
      window.location = redirectUrl
    }
  }

  return (
    <CheckoutForm
      submitPayment={data => handlePayment(data)}
      order={data}
      loading={loading}
    />
  )
}

export default CheckoutContainer
