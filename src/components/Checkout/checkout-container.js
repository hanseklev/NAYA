import React, { useContext, useState } from "react"
import { useQuery, gql } from "@apollo/client"
import { ProductContext } from "../../context/productContext"

import styles from "./checkout-container.module.css"
import PaymentOptions from "./payment"

const CheckoutContainer = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [adress, setAdress] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")

  const { setShippingAddress, createOrder, cartItems } = useContext(
    ProductContext
  )

  const { data } = useQuery(gql`
    query MyQuery {
      products {
        nodes {
          ... on SimpleProduct {
            id
            name
          }
        }
      }
    }
  `)
  console.log(data)

  function submitHandler(event) {
    event.preventDefault()
    setShippingAddress({
      fullName,
      adress,
      city,
      postalCode,
    })
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} name="checkout" onSubmit={submitHandler}>
        <section className={styles.field}>
          <label htmlFor="email">
            <span>E-post</span>
            <input
              id="email"
              name="email"
              type="email"
              autoCorrect="off"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </section>
        <section className={styles.field}>
          <h3>Leveringsadresse</h3>
          <fieldset>
            <div className={styles.field}>
              <label>
                <span>Navn</span>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                />
              </label>
            </div>
            <div className={styles.field}>
              <label>
                <span>Adresse</span>
                <input
                  name="address"
                  id="address"
                  type="text"
                  value={adress}
                  onChange={e => setAdress(e.target.value)}
                />
              </label>
            </div>
            <div
              className={`${styles.field} ${styles.half}`}
              style={{ marginRight: "12px" }}
            >
              <label>
                <span>Postnummer</span>
                <input
                  name="postal-code"
                  id="postalCode"
                  type="text"
                  value={postalCode}
                  onChange={e => setPostalCode(e.target.value)}
                />
              </label>
            </div>
            <div className={`${styles.field} ${styles.half}`}>
              <label>
                <span>Poststed</span>
                <input
                  name="city"
                  id="city"
                  type="text"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </label>
            </div>
          </fieldset>
        </section>
        <section>
          <h3>Velg betaling</h3>
          <PaymentOptions></PaymentOptions>
        </section>
        <div>
          <button className={styles.paymentButton} type="submit">
            Til betaling
          </button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutContainer
