import { navigate } from "gatsby"
import React, { useContext } from "react"
import { ProductContext } from "../../context/productContext"
import styles from "./cart-container.module.css"
import { LeftArrow } from "./LeftArrow"

export const CartContainer = ({ children }) => {
  const { cartItems } = useContext(ProductContext)

  const SHIPPING = 49.0

  function goToShopPage() {
    navigate("/shop")
  }

  function subTotal(cartItems) {
    console.log(cartItems)
  /*   if (cartItems.length === 1)
      return cartItems[0].price * cartItems[0].quantity
 */
    let sum = 0

    return cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
  }

  function total(cartItems) {
    return subTotal(cartItems) + SHIPPING
  }

  return (
    <div className={styles.outerWrapper}>
      <section className={styles.wrapper}>
        <ul className={styles.cartList}>{children}</ul>
        <div className={styles.checkoutFixed}>
          <section className={styles.section}>
            Subtotal
            <section className={styles.lefty}>
              <span>{subTotal(cartItems)} kr</span>
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
              <span>{total(cartItems)} kr</span>
            </section>
          </section>
        </div>
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
