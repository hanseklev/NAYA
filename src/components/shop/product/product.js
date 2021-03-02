import parse from "html-react-parser"
import React from "react"
import { parsePrice } from "../../../lib/helpers"
import AddToCartButton from "../../cart/add-to-cart-button"
import styles from "./product.module.css"
import StockStatus from "./stock-status"

function Product({ product }) {
  const {
    description,
    name,
    featuredImage,
    price,
    stockStatus,
    shortDescription,
  } = product

  return (
    <article className={styles.product}>
        <div className={styles.imageContainer}>
          <img
            src={featuredImage.node.sourceUrl}
            style={{ width: "100%" }}
            alt="produktbilde"
          />
        </div>
        <div className={styles.infoContainer}>
        <h1>{name}</h1>
        <p className={styles.price}>{parsePrice(price)} kr</p>
        {description && parse(description)}
        <StockStatus stockStatus={stockStatus} />
        <div className={styles.addProductWrapper}>
          <AddToCartButton product={product} />
        </div>
        <section>{parse(shortDescription)}</section>
      </div>
    </article>
  )
}

export default Product
