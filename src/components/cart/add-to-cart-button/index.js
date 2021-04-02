import { useMutation, useQuery } from "@apollo/client"
import React, { useContext } from "react"
import { v4 } from "uuid"
import { ShopContext } from "../../../context/shop-context"
import { getCartError, getFormattedCart } from "../../../lib/cart-utils"
import { ADD_TO_CART_MUTATION } from "../../../mutations/add-to-cart"
import { GET_CART_QUERY } from "../../../queries/get-cart"
import Button from "../../_shared/button"

const AddToCartButton = ({ product, cartErrors }) => {
  const { setCart, setOpenCart } = useContext(ShopContext)

  const isInStock = product.stockStatus === "IN_STOCK"
  const cartInput = {
    clientMutationId: v4(),
    productId: product.databaseId,
  }

  const { data, refetch } = useQuery(GET_CART_QUERY, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      const formattedCart = getFormattedCart(data)
      localStorage.setItem("naya-cart", JSON.stringify(formattedCart))
      setCart(formattedCart)
    },
  })

  const [addToCart, { loading, error }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { input: cartInput },
    onCompleted: () => {
      if (error) {
        cartErrors(getCartError(error))
      }
      refetch()
      setOpenCart(true)
    },
    onError: error => {
      cartErrors(getCartError(error))
    },
  })

  function handleAddToCart() {
    cartErrors(null)
    addToCart()
  }

  return (
    <Button
      primary
      bold
      label={loading ? "Legger til..." : "Legg i handlekurven"}
      disabled={!isInStock || loading}
      onClick={() => handleAddToCart()}
    />
  )
}

export default AddToCartButton
