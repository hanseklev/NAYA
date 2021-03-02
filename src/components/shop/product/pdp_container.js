import React, { useState } from "react"
import VariableProduct from "./variation"

const PDPContainer = ({ product }) => {
  const [currentProduct, setCurrentProduct] = useState(
    product.variations.nodes[0]
  )
  //console.log(product)

  function isColor(variation, color) {
 /*    console.log(vat)
    console.log(variation.attributes.nodes[0].value.toLowerCase())
    console.log(color.toLowerCase()) */
    return (
      variation.attributes.nodes[0].value.toLowerCase() === color.toLowerCase()
    )
  }

  function setVariation(color) {
    //console.log(product.variations.nodes)
    const newVariation = product.variations.nodes.find(variation =>
      isColor(variation, color)
    )
   //console.log(newVariation)
    setCurrentProduct(newVariation)

    //product.variations
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
