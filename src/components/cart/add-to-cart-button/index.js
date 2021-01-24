import { useMutation } from "@apollo/client"
import Cookie from "js-cookie"
import React, { useContext } from "react"
import { v4 } from "uuid"
import { ShopContext } from "../../../context/shop-context"
import { formatCart } from "../../../lib/utils"
import { ADD_TO_CART_MUTATION } from "../../../mutations/add-to-cart"
import styles from "../../shop/product/product.module.css"

const AddToCartButton = ({ product }) => {
  const isInStock = product.stockStatus === "IN_STOCK"

  const [cart, setCart] = useContext(ShopContext)
  const clientMutationId = v4()

  /*  const { data, refetch } = useQuery(GET_CART, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      console.log(data);
      setCart(formatCart(data))
      Cookie.set("naya_cart", JSON.stringify(cart))
    },
    onError(err) {
      console.log(err)
    },
  })
 */
  const [addToCart] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { input: product.databaseId, clientMutationId },
    notifyOnNetworkStatusChange: true,
    onCompleted: ({addToCart:{ cart}}) => {
      alert("lagt til i handlevogn")
      //console.log(data);
      setCart(formatCart(cart))
      Cookie.set("naya_cart", JSON.stringify(cart))
      //navigate('/cart')
    },
    onError: error => {
      if (error) console.error(error.message)
    },
  })

  return (
    <button
      className={styles.addToCartButton}
      disabled={!isInStock}
      onClick={() => addToCart(product)}
    >
      Legg i handlekurven
    </button>
  )
}

export default AddToCartButton
