import React from "react"
import styles from "./cart.module.css"
import { LeftArrow } from "./LeftArrow"
import {navigate} from 'gatsby'

export const CartContainer = ({ children }) => {

  function goToShopPage(){

    navigate('/shop')



  }
  return (
    <div className={styles.outerWrapper}>
      <header className={styles.header}>
        <button onClick={(()=> goToShopPage())} className={styles.backButton}>
          <LeftArrow className={styles.arrow} />
        </button>

        <h1>Handlekurv</h1>
      
      </header>
      <section className={styles.wrapper}>
        <ul className={styles.cartList}>{children}</ul>
        <div className={styles.checkoutFixed}>
          <section className={styles.section}>
            Subtotal
            <section className={styles.lefty}>
              <span>149.00</span>
            </section>
          </section>
          <section className={styles.section}>
            Frakt
            <section className={styles.lefty}>
              <span>49.00</span>
            </section>
          </section>
          <section className={styles.section}>
            Total
            <section className={styles.lefty}>
              <span>198.00</span>
            </section>
          </section>
        </div>
        <button className={styles.checkoutButton}>Til kassen</button>
      </section>
    </div>
  )
}
