import { useMutation, useQuery } from "@apollo/client"
import { navigate } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import { ShopContext } from "../../../context/shop-context"
import {
  getCartError,
  getFloatVal,
  getFormattedCart,
  getShippingPrice,
  getTotalPriceWithShipping,
} from "../../../lib/cart-utils"
import { ADD_TO_CART_MUTATION } from "../../../mutations/add-to-cart"
import CLEAR_CART_MUTATION from "../../../mutations/clear-cart"
import { UPDATE_CART_QTY_MUTATION } from "../../../mutations/update-cart"
import { GET_CART_QUERY } from "../../../queries/get-cart"
import Button from "../../_shared/button"
import { CartItem } from "../cart-item"

const CartContainer = ({ closeCart }) => {
  const { cart, setCart, setOpenCart } = useContext(ShopContext)
  const [cartError, setCartError] = useState(false)
  const cartItems = cart && cart.products
  const [isCartEmpty, setCartIsEmpty] = useState(true)

  useEffect(() => {
    cart == null ? setCartIsEmpty(true) : setCartIsEmpty(false)
  }, [isCartEmpty, cart])


  const { data, refetch } = useQuery(GET_CART_QUERY, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      // Update cart in the localStorage.
      const updatedCart = getFormattedCart(data)
      localStorage.setItem("naya-cart", JSON.stringify(updatedCart))

      // Update cart data in React Context.
      setCart(updatedCart)
    },
    onError: err => setCartError(getCartError(err)),
  })

  const [clearCart, { loading: cartClearLoading }] = useMutation(
    CLEAR_CART_MUTATION,
    {
      onCompleted: () => {
        refetch()
      },
      onError: err => console.log(err),
    }
  )

  const [updateCartItems] = useMutation(UPDATE_CART_QTY_MUTATION, {
    onCompleted: () => {
      setCartError(null)
      refetch()
    },
    onError: err => setCartError(getCartError(err)),
  })

  const [addToCart, { error }] = useMutation(ADD_TO_CART_MUTATION, {
    onCompleted: () => {
      setCartError(null)
      if (error) {
        console.error(error)
        setCartError(getCartError(error))
      }
      refetch()
      setOpenCart(true)
    },
    onError: error => {
      setCartError(getCartError(error))
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
      {isCartEmpty ? (
        <EmptyCart
          setOpenCart={() => setOpenCart(false)}
          closeCart={() => closeCart()}
        />
      ) : (
        <>
          <div className="nav-section">
            <Button goBack onClick={() => closeCart()} />
          </div>
          <div className="scroll-wrap">
            <div className="cart-header">
              <h2 style={{ marginBottom: "0.5rem" }}>Handlekurven</h2>
              {isCartEmpty ? <div> er tom </div> : null}
            </div>
            {cartError && (
              <div className="error-msg">
                <p>{cartError}</p>
              </div>
            )}
            <CartList>
              {cartItems &&
                cartItems.map((item, i) => (
                  <CartItem
                    item={item}
                    products={cartItems}
                    key={i}
                    updateCart={updateCartItems}
                    addQtyToCart={addToCart}
                  />
                ))}
            </CartList>
          </div>
          {cart && (
            <div className="info-section">
              <PriceSection label="Subtotal" cart={cart} />
              <PriceSection label="Frakt" cart={cart} />
              <PriceSection label="Total" cart={cart} />
            </div>
          )}
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
      )}
    </Wrapper>
  )
}

export default CartContainer

const EmptyCart = ({ setOpenCart, closeCart }) => {
  return (
    <>
      <div className="nav-section">
        <Button goBack onClick={() => closeCart()} />
      </div>
      <div className="cart-header">
        <h2 style={{ marginBottom: "0.5rem" }}>Handlekurven</h2>
        <div> er tom </div>
        <div style={{ marginTop: "6rem", textAlign: "center" }}>
          Det ser ut som handlekurven din er tom
          <br />
          Det kan vi få orden på:)
        </div>
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
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 12px 12px 24px;

  .nav-section {
    margin-bottom: 0.1rem;
    height: 1rem;
  }

  .scroll-wrap {
    overflow-y: auto;
    margin-bottom: auto;
  }

  .cart-header {
    margin-bottom: auto;
    text-align: center;
  }

  .info-section {
    border-top: 1px solid rgb(224, 224, 224);
  }

  .error-msg {
    p  {
      color: #956741;
    }
  }
`

const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 2rem 0 0;
`

const Section = styled.div`
  display: flex;
  padding: 12px 0;
`

const PriceSection = ({ label, cart }) => {
  let floatPrice = 0
  if (label === "Frakt") floatPrice = getShippingPrice(cart.shippingTotal)
  else if (label === "Total")
    floatPrice = getTotalPriceWithShipping(cart)
  else floatPrice = getFloatVal(cart.subtotal)

  return (
    <Section>
      {label}
      <div style={{ marginLeft: "auto" }}>
        <span> {floatPrice} kr</span>
      </div>
    </Section>
  )
}
