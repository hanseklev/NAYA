import { useMutation } from "@apollo/client"
import Cookie from "js-cookie"
import React, { useContext } from "react"
import { v4 } from "uuid"
import { ShopContext } from "../../../context/shop-context"
import { formatCart } from "../../../lib/utils"
import { ADD_TO_CART_MUTATION } from "../../../mutations/add-to-cart"
import Button from "../../_shared/button"

const AddToCartButton = ({ product }) => {
  const isInStock = product.stockStatus === "IN_STOCK"

  const {setCart, setOpenCart} = useContext(ShopContext)
  const clientMutationId = v4()

  const [addToCart, {loading}] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { input: product.databaseId, clientMutationId },
    notifyOnNetworkStatusChange: true,
    onCompleted: ({addToCart:{ cart}}) => {
      //alert("lagt til i handlevogn")
      //console.log(data);
      setCart(formatCart(cart))
      Cookie.set("naya_cart", JSON.stringify(formatCart(cart)))
      setOpenCart(true)
    },
    onError: error => {
      if (error) console.error(error.message)
    },
  })

  //disabled styles
  return (
    <Button primary bold
      label={loading ? 'Legger til...':  'Legg i handlekurven'}
      disabled={!isInStock || loading}
      onClick={() => addToCart(product)}
    />
  )
}

export default AddToCartButton
