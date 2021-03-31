import { useMutation, useQuery } from "@apollo/client"
import { navigate } from "gatsby"
import Cookie from "js-cookie"
import React, { useContext } from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import { ShopContext } from "../../../context/shop-context"
import { parsePrice, removeHTMLTags } from "../../../lib/helpers"
import { formatCart } from "../../../lib/utils"
import CLEAR_CART_MUTATION from "../../../mutations/clear-cart"
import { UPDATE_CART_QTY_MUTATION } from "../../../mutations/update-cart"
import { GET_CART2 } from "../../../queries/get-cart"
import Button from "../../_shared/button"
import { CartItem } from "../cart-item"

const CartContainer = ({ closeCart }) => {
  const { cart, setCart, setOpenCart } = useContext(ShopContext)
  const cartItems = cart && cart.products
  const SHIPPING = 49.0
  let cartIsEmpty = !(cartItems && cartItems.length > 0)

  const { data, refetch } = useQuery(GET_CART2, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      console.log("completed GET_CART", data)

      // Update cart in the localStorage.
      const updatedCart = formatCart(data)
      localStorage.setItem("naya_cart", JSON.stringify(updatedCart))

      // Update cart data in React Context.
      setCart(updatedCart)
    },
  })

  const [clearCart, { loading: cartClearLoading }] = useMutation(
    CLEAR_CART_MUTATION,
    {
      onCompleted: () => {
        //setCart([])
        setTimeout(() => {alert('timeout')}, 1000)
        refetch();
      },
      onError: err => console.log(err),
    }
  )

  const [updateCartItems] = useMutation(UPDATE_CART_QTY_MUTATION, {
    onCompleted: ({ updateItemQuantities: { cart } }) => {
      setCart(formatCart(cart))
      Cookie.set("naya_cart", JSON.stringify(formatCart(cart)))
    },
    onError: err => {
      const formattedError = removeHTMLTags(err.graphQLErrors[0]?.message)
      alert(formattedError)
    },
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
      <div style={{ marginBottom: "0.1rem", height: "1rem" }}>
        <Button goBack onClick={() => closeCart()} />
      </div>
      <div className="cart-header">
        <h2 style={{ marginBottom: "0.5rem" }}>Handlekurven</h2>
        {cartIsEmpty ? <div> er tom </div> : null}
      </div>
      {cartItems && cartItems.length > 0 ? (
        <>
          <CartList>
            {cartItems.map((item, i) => (
              <CartItem
                item={item}
                products={cartItems}
                key={i}
                updateCart={updateCartItems}
              />
            ))}
          </CartList>
          <div
            style={{
              borderTop: "1px solid rgb(224, 224, 224)",
            }}
          >
            <PriceSection
              label="Subtotal"
              price={cart.totalProductsPrice && parsePrice(cart.subtotal)}
            />
            <PriceSection label="Frakt" price={SHIPPING} />
            <PriceSection
              label="Total"
              price={cart.totalProductsPrice && parsePrice(cart.total)}
            />
          </div>
          <Button
            primary
            dark
            onClick={event => handleClearCart(event)}
            label={
              cartClearLoading ? "Tømmer handlekurven.." : "Tøm handlekurv"
            }
          />
          <Button
            primary
            dark
            label="Til kassen"
            onClick={() => goToCheckout()}
          />
        </>
      ) : (
        <>
          <div style={{ marginBottom: "1rem", textAlign: "center" }}>
            Det ser ut som handlekurven din er tom
            <br />
            Det kan vi få orden på:)
          </div>
          <Button
            primary
            dark
            label="Gå til shop"
            onClick={() => {
              navigate("/shop")
              setOpenCart(false)
            }}
          />
        </>
      )}
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
  width: 100%;
  height: 100vh;
  padding: 12px 12px 12px;

  .cart-header {
    margin-bottom: 100px;
    text-align: center;
  }
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

/* const EmptyBasketNotifier = styled.div`
  margin-bottom: 1rem;
  text-align: center;
` */
