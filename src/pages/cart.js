import React, { useContext } from "react"
import { CartContainer } from "../components/Cart/cart-container"
import { CartItem } from "../components/Cart/cart-item"
import ShopLayout from "../components/layouts/shopLayout"
import { ProductContext } from "../context/productContext"

const CartPage = () => {
  const { cartItems } = useContext(ProductContext)
  console.log(cartItems)

  return (
    <ShopLayout title="Handlekurv">
      <CartContainer>
        {cartItems &&
          cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </CartContainer>
    </ShopLayout>
  )
}

export default CartPage
