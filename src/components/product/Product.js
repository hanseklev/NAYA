import GatsbyImage from "gatsby-image"
import React, { useContext } from "react"
//import { ProductContext } from "../../context/productContext"
import styles from "./product.module.css"

function Product(props) {
  const { slug, title, _rawBlurb, defaultProductVariant } = props

  const { price, images } = defaultProductVariant

  /* const { addItem } = useContext(ProductContext) */

  return (
    <article>
      <div>
        <h1>{title}</h1>
        <GatsbyImage fluid={images[0].asset.fluid} style={{ width: "150px" }} />
        <p>{price}</p>
        <p className={styles.p}>{_rawBlurb.en}</p>
        <button onClick={() => alert('Lagt til')}>Legg i handlekurv</button>
      </div>
    </article>
  )
}

//onclick -> addItem(props)

export default Product
