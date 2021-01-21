import React, { useContext } from "react"
import { ProductContext } from "../../context/productContext"
import styles from "./product.module.css"

function Product({ product }) {
  console.log(product)
  const { description, name, featuredImage, price } = product
  const { addItem } = useContext(ProductContext)
  const isInStock = product.stockStatus === "IN_STOCK"

  return (
    <article>
      <div>
        <h1>{name}</h1>
        <img src={featuredImage.node.sourceUrl} alt="produktbilde" style={{ width: "100%" }} />
        <p>{price}</p>
        <p className={styles.p}>{description}</p>
        <button disabled={!isInStock} onClick={() => addItem(product)}>
          Legg i handlekurv
        </button>
      </div>
    </article>
  )
}

export default Product
