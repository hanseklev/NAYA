import React, { useContext } from "react"
import { ProductContext } from "../../context/productContext"
import styles from "./cart.module.css"

export const CartItem = ({ item }) => {
  const { deleteItem, increase, decrease } = useContext(ProductContext)

  return (
    <div>
      <li key={item.id}>
        <figure>
          <img
            className={styles.image}
            src={item.featuredImage.node.sourceUrl}
            alt="produktbilde"
            style={{ width: "100px" }}
          />
        </figure>
        <div className={styles.product}>
          <div className={styles.header}>
            <h2>{item.title}</h2>
            <button
              className={styles.deleteButton}
              onClick={() => deleteItem(item)}
            >
              X
            </button>
          </div>

          <div className={styles.content}>
            <div className={styles.info}>
              <p className={styles.description}>Beskrivelse goes here</p>
            </div>
            <div className={styles.variants}>
              <span className={styles.quantity}>Antall</span>
              <div className={styles.priceContainer}>
                <div className={styles.quantityContainer}>
                <button onClick={()=> decrease(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={()=> increase(item)}>+</button>
                </div>
                <div> {item.price}</div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  )
}
