import { useMutation } from "@apollo/client"
import { navigate } from "gatsby"
import Cookie from "js-cookie"
import React, { useContext } from "react"
import { v4 } from "uuid"
import { ShopContext } from "../../../context/shop-context"
import { parsePrice } from "../../../lib/helpers"
import CLEAR_CART_MUTATION from "../../../mutations/clear-cart"
import { CartItem } from "../cart-item"
import styles from "./cart-container.module.css"
import { UPDATE_CART_QTY_MUTATION } from "../../../mutations/update-cart"
import { formatCart } from "../../../lib/utils"

export const CartContainer = () => {
  const [cart, setCart] = useContext(ShopContext)
  console.log(cart)

  const [clearCart, { loading: cartClearLoading }] = useMutation(
    CLEAR_CART_MUTATION,
    {
      onCompleted: () => {
        alert("Handlerkurven er tom")
      },
      onError: err => console.log(err),
    }
  )

  const [updateCartItems] = useMutation(UPDATE_CART_QTY_MUTATION, {
    onCompleted: ({ updateItemQuantities: {cart}}) => {
      console.log(cart);
      setCart(formatCart(cart))
      Cookie.set("naya_cart", JSON.stringify(cart))
    },
    onError: err => console.log(err),
  })

  const cartItems = cart && cart.products
  const SHIPPING = 49.0

  function handleClearCart(event) {
    event.stopPropagation()
    if (cartClearLoading) return

    setCart(new Array([]))
    Cookie.remove("naya_cart")

    clearCart({
      variables: {
        input: {
          clientMutationId: v4(),
          all: true,
        },
      },
    })
  }

  return (
    <div className={styles.outerWrapper}>
      <section className={styles.wrapper}>
        {
          <ul className={styles.cartList}>
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
              <li>Du har ingenting i kurven :) </li>
            )}
          </ul>
        }

        <div className={styles.checkoutFixed}>
          <section className={styles.section}>
            Subtotal
            <section className={styles.lefty}>
              <span>
                {cart.totalProductsPrice && parsePrice(cart.totalProductsPrice)}{" "}
                kr
              </span>
            </section>
          </section>
          <section className={styles.section}>
            Frakt
            <section className={styles.lefty}>
              <span>{SHIPPING} kr</span>
            </section>
          </section>
          <section className={styles.section}>
            Total
            <section className={styles.lefty}>
              <span>
                {cart.totalProductsPrice && parsePrice(cart.totalProductsPrice)}{" "}
                kr
              </span>
            </section>
          </section>
        </div>
        <button
          className={styles.checkoutButton}
          onClick={event => handleClearCart(event)}
        >
          Tøm handlekurv
        </button>

        <button
          onClick={() => navigate("/checkout")}
          className={styles.checkoutButton}
        >
          Til kassen
        </button>
      </section>
    </div>
  )
}
