import parse from "html-react-parser"
import React from "react"
import { parsePrice } from "../../../../lib/helpers"
import AddToCartButton from "../../../cart/add-to-cart-button"
import { ProductContainer } from "../../../_shared/styles"
import ColorPicker from "../color-picker"
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
    <ProductContainer>
      <figure>
        <img
          src={featuredImage.node.sourceUrl}
          style={{ width: "100%" }}
          alt="produktbilde"
        />
      </figure>
      <div className="info">
        <h1>{name}</h1>
        <p>{parsePrice(price)} kr</p>
        {description && parse(description)}
        <StockStatus stockStatus={stockStatus} />
        <ColorPicker colors={attributes} updateCurrentVariation={handleColorChange} />
          <AddToCartButton product={currentProduct} />
        <section>{shortDescription && parse(shortDescription)}</section>
      </div>
    </ProductContainer>
  )
}

export default VariableProduct
