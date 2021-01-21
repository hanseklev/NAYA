import { Link } from "gatsby"
import React, { useContext } from "react"
import { ProductContext } from "../../context/productContext"
import styles from "./cart-item.module.css"

export const CartItem = ({ item }) => {
  const { deleteItem, increase, decrease } = useContext(ProductContext)

  return (
    <li key={item.id} className={styles.container}>
      <div className={styles.flexCol}>
        <figure>
          <img
            src={item.featuredImage.node.sourceUrl}
            alt="produktbilde"
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
            onClick={() => deleteItem(item)}
          >
            Fjern
          </button>
        </div>
      </div>

      <div className={styles.flexCol}>
      <button onClick={() => increase(item)}>+</button>
      <span>{item.quantity}</span>
      <button onClick={() => decrease(item)}>-</button>
      </div>
    </li>
  )
}
