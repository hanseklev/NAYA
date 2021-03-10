import React, { useState } from "react"
import VariableProduct from "./type/variation-product"

const PDPContainer = ({ product }) => {
  const [currentProduct, setCurrentProduct] = useState(
    product.variations.nodes[0]
  )

  function isColor(variation, color) {
    return (
      variation.attributes.nodes[0].value.toLowerCase() === color.toLowerCase()
    )
  }

  function setVariation(color) {
    const newVariation = product.variations.nodes.find(variation =>
      isColor(variation, color)
    )
    setCurrentProduct(newVariation)
  }

  return (
    <VariableProduct
      attributes={product.attributes}
      handleVariationChange={setVariation}
      currentProduct={currentProduct}
    />
  )
}

export default PDPContainer
