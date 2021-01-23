import { useMutation } from "@apollo/client"
import React, { useContext } from "react"
import { ADD_TO_CART_QUERY } from "../../../mutations/add-to-cart"
import { ShopContext } from "../../../context/shop-context"
import { formatCart } from "../../../lib/utils"
import Cookie from "js-cookie"

const AddToCartButton = ({ product }) => {
  const isInStock = product.stockStatus === "IN_STOCK"

  const [cart, setCart] = useContext(ShopContext)

  const [addToCart] = useMutation(ADD_TO_CART_QUERY, {
    variables: { input: product.databaseId },
    notifyOnNetworkStatusChange: true,
    onCompleted: data => {
      setCart(formatCart(data))
      Cookie.set("naya_cart", JSON.stringify(formatCart(data)))
    },
    onError: error => {
      if (error) console.error(error.message)
    },
  })

  return (
    <button disabled={!isInStock} onClick={() => addToCart(product)}>
      Legg i handlekurven
    </button>
  )
}

export default AddToCartButton
