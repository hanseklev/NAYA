import { useMutation, useQuery } from "@apollo/client"
import Cookie from "js-cookie"
import React, { useContext, useState } from "react"
import { v4 } from "uuid"
import { ShopContext } from "../../../context/shop-context"
import { formatCart } from "../../../lib/utils"
import { ADD_TO_CART_MUTATION } from "../../../mutations/add-to-cart"
import { GET_CART } from "../../../queries/get-cart"
import Button from "../../_shared/button"

const AddToCartButton = ({ product }) => {
  const { setCart, setOpenCart } = useContext(ShopContext)

  /* const { data, refetch } = useQuery(GET_CART, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      console.log(data)
      const formattedCart = formatCart(data)
      Cookie.set("naya_cart", JSON.stringify(formattedCart))
      setCart(formattedCart)
    },
  }) */

  const [, setCartError] = useState(false)


  const isInStock = product.stockStatus === "IN_STOCK"

  const cartInput = {
    clientMutationId: v4(),
    productId: product.databaseId,
  }

  const [addToCart, { loading, error }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { input: cartInput },
    onCompleted: () => {
      //alert("lagt til i handlevogn")
      //console.log(data);
      if (error) {
        console.error(error)
        setCartError(true)
      }
      //refetch()
      setOpenCart(true)
    },
    onError: error => {
      if (error) console.error(error)
    },
  })

  function handleAddToCart() {
    addToCart(product)
  }
  //{!isInStock || loading}
  return (
    <Button
      primary
      bold
      label={loading ? "Legger til..." : "Legg i handlekurven"}
      disabled={true}
      onClick={() => handleAddToCart()}
    />
  )
}

export default AddToCartButton
