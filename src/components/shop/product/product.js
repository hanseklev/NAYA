import React from "react"
import AddToCartButton from "../../cart/add-to-cart-button"
import styles from "./product.module.css"
import parse from "html-react-parser"

function Product({ product }) {
  const { description, name, featuredImage, price } = product

  return (
    <article className={styles.product}>
      <div>
        <h1>{name}</h1>
        <img src={featuredImage.node.sourceUrl} alt="produktbilde" style={{ width: "250px" }} />
        <p>{price}</p>
        {description && parse(description)}
        <AddToCartButton product={product}/>
      </div>
    </article>
  )
}

export default Product
