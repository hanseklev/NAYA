import { Link } from "gatsby"
import React from "react"
import styles from "./cart-item.module.css"

export const CartItem = ({ item }) => {
  function placeHolder(){}

  return (
    <li key={item.id} className={styles.container}>
      <div className={styles.flexCol}>
        <figure>
        <img
            src={item.image.sourceUrl}
            alt={item.image.altText}
            style={{ width: "100%" }}
          />
        </figure>
      </div>
      <div className={styles.flexCol}>
        <Link to={`/product/${item.id}`} className={styles.itemTitle}>{item.name}</Link>
        <div> {item.price} kr</div>

        <div>
          <button
            className={styles.removeButton}
            onClick={() => placeHolder(item)}
          >
            Fjern
          </button>
        </div>
      </div>

      <div className={styles.flexCol}>
      <button onClick={() => placeHolder(item)}>+</button>
      <span>{item.quantity}</span>
      <button onClick={() => placeHolder(item)}>-</button>
      </div>
    </li>
  )
}
