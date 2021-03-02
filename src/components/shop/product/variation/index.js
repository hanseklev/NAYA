import parse from "html-react-parser"
import React from "react"
import { parsePrice } from "../../../../lib/helpers"
import AddToCartButton from "../../../cart/add-to-cart-button"
import ColorPicker from "../color-picker"
import styles from "../product.module.css"
import StockStatus from "../stock-status"

function VariableProduct({attributes, product, currentProduct, handleVariationChange }) {
  const {
    description,
    name,
    featuredImage,
    price,
    stockStatus,
    shortDescription,
  } = currentProduct

  function handleColorChange(color){
    handleVariationChange(color)
  }

/*   const variationImgUrls = []
  variations.nodes.forEach(v =>
    variationImgUrls.push(v.featuredImage.node.sourceUrl)
  )
  console.log(variationImgUrls); */

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
        <ColorPicker colors={attributes} updateCurrentVariation={handleColorChange} />
        <div className={styles.addProductWrapper}>
          <AddToCartButton product={currentProduct} />
        </div>
        <section>{shortDescription && parse(shortDescription)}</section>
      </div>
    </article>
  )
}

export default VariableProduct
