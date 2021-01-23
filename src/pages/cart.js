import React from "react"
import { CartContainer } from "../components/Cart/cart-container"
import ShopLayout from "../components/layouts/shop-layout"

const CartPage = () => {

  return (
    <ShopLayout title="Handlekurv">
      <CartContainer />
    </ShopLayout>
  )
}

export default CartPage
