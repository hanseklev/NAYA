import { Link } from "gatsby"
import React, { useState } from "react"
import { v4 } from "uuid"
import { getUpdatedCartItems } from "../../../lib/utils"
import styles from "./cart-item.module.css"

export const CartItem = ({ item, products, updateCart }) => {
  const [itemCount, setItemCount] = useState(item.quantity)
  const clientMutationId = v4()

  function handleQtyChange(event, type) {
    let newCount
    event.stopPropagation()

    if (type === "DECREMENT" && itemCount === 1) return

    newCount = type === "INCREMENT" ? itemCount + 1 : itemCount - 1

    setItemCount(newCount)

    const updatedItems = getUpdatedCartItems(products, newCount, item.cartKey)
    updateCart({
      variables: {
        input: {
          clientMutationId: clientMutationId,
          items: updatedItems,
        },
      },
    })
  }

  function placeHolder() {}

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
        <Link to={`/product/${item.id}`} className={styles.itemTitle}>
          {item.name}
        </Link>
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
        <button onClick={event => handleQtyChange(event, "INCREMENT")}>
          +
        </button>
        <span>{item.quantity}</span>
        <button onClick={event => handleQtyChange(event, "DECREMENT")}>
          -
        </button>
      </div>
    </li>
  )
}
