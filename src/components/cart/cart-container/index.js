import { useMutation } from "@apollo/client"
import { navigate } from "gatsby"
import Cookie from "js-cookie"
import React, { useContext } from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import { ShopContext } from "../../../context/shop-context"
import { parsePrice } from "../../../lib/helpers"
import { formatCart } from "../../../lib/utils"
import CLEAR_CART_MUTATION from "../../../mutations/clear-cart"
import { UPDATE_CART_QTY_MUTATION } from "../../../mutations/update-cart"
import Button from "../../_shared/button"
import { CartItem } from "../cart-item"

const CartContainer = ({ closeCart }) => {
  const { cart, setCart, setOpenCart } = useContext(ShopContext)
  const cartItems = cart && cart.products
  const SHIPPING = 49.0

  const [clearCart, { loading: cartClearLoading }] = useMutation(
    CLEAR_CART_MUTATION,
    {
      onCompleted: () => {
        setCart([])
        Cookie.remove("naya_cart")
      },
      onError: err => console.log(err),
    }
  )

  const [updateCartItems] = useMutation(UPDATE_CART_QTY_MUTATION, {
    onCompleted: ({ updateItemQuantities: { cart } }) => {
      setCart(formatCart(cart))
      Cookie.set("naya_cart", JSON.stringify(formatCart(cart)))
    },
    onError: err => console.log(err),
  })

  function handleClearCart(event) {
    event.stopPropagation()
    if (cart.length === 0 || cartClearLoading) return

    clearCart({
      variables: {
        input: {
          clientMutationId: v4(),
          all: true,
        },
      },
    })
    setCart([])
  }

  function goToCheckout() {
    if (cart.totalProductsCount <= 0) {
      alert("Handlekurven er tom")
      return
    }
    setOpenCart(false)
    navigate("/checkout")
  }

  return (
    <Wrapper>
      <nav style={{ marginBottom: "0.1rem", height: "1rem" }}>
        <Button goBack label="Lukk" onClick={() => closeCart()} />
      </nav>
      <h1>Handlekurv</h1>
      <CartList>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, i) => (
            <CartItem
              item={item}
              products={cartItems}
              key={i}
              updateCart={updateCartItems}
            />
          ))
        ) : (
          <li style={{ listStyleType: "none" }}>
            Du har ingenting i kurven :){" "}
          </li>
        )}
      </CartList>
      <div
        style={{
          borderTop: "1px solid rgb(224, 224, 224)",
        }}
      >
        <PriceSection
          label="Subtotal"
          price={cart.totalProductsPrice && parsePrice(cart.totalProductsPrice)}
        />
        <PriceSection label="Frakt" price={SHIPPING} />
        <PriceSection
          label="Total"
          price={cart.totalProductsPrice && parsePrice(cart.totalProductsPrice)}
        />
      </div>
      <div>
        <Button
          primary
          onClick={event => handleClearCart(event)}
          label={cartClearLoading ? "Tømmer handlekurven.." : "Tøm handlekurv"}
          dark
        />
        <Button
          dark
          primary
          label="Til kassen"
          onClick={() => goToCheckout()}
        />
      </div>
    </Wrapper>
  )
}

export default CartContainer

export const PriceSection = ({ label, price }) => (
  <Section>
    {label}
    <div style={{ marginLeft: "auto" }}>
      <span>{price} kr</span>
    </div>
  </Section>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 12px 12px 28px;
`

const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

const Section = styled.div`
  display: flex;
  padding: 12px 0;
`
