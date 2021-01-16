import GatsbyImage from "gatsby-image"
import React, { useContext } from "react"
import { ProductContext } from "../../context/productContext"
import styles from "./cart.module.css"

export const CartItem = ({ item }) => {
  const { deleteItem, increase, decrease } = useContext(ProductContext)

  return (
    <div>
      <li key={item._id}>
        <figure>
          <GatsbyImage
            className={styles.image}
            fluid={item.defaultProductVariant.images[0].asset.fluid}
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
              <label className={styles.quantity}>Antall</label>
              <div className={styles.priceContainer}>
                <div className={styles.quantityContainer}>
                <button onClick={()=> decrease(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={()=> increase(item)}>+</button>
                </div>
                <div> {item.defaultProductVariant.price}</div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  )
}
