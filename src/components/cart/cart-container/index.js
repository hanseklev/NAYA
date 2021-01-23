import { navigate } from "gatsby"
import React, { useContext } from "react"
import { ShopContext } from "../../../context/shop-context"
import { CartItem } from "../cart-item"
import Cookie from "js-cookie"
import styles from "./cart-container.module.css"

export const CartContainer = () => {
  const [cart, setCart] = useContext(ShopContext)
  console.log(cart)

  const cartItems = cart && cart.products
  const SHIPPING = 49.0

  function clearCart() {
    Cookie.remove("naya_cart")
    setCart([])
  }

  return (
    <div className={styles.outerWrapper}>
      <section className={styles.wrapper}>
        {cartItems && (
          <ul className={styles.cartList}>
            {cartItems.length > 0 ? (
              cartItems.map((item, i) => <CartItem item={item} key={i} />)
            ) : (
              <li>Du har ingenting i kurven :) </li>
            )}
          </ul>
        )}

        <div className={styles.checkoutFixed}>
          <section className={styles.section}>
            Subtotal
            <section className={styles.lefty}>
              <span>{cart.totalProductsPrice}</span>
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
              <span>{cart.totalProductsPrice}</span>
            </section>
          </section>
        </div>
        <button className={styles.checkoutButton} onClick={() => clearCart()}>
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
