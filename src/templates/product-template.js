import { graphql } from "gatsby"
import React, { useState } from "react"

import MainLayout from "../components/layouts/main"
import Product from "../components/product/Product"
import { parsePrice } from "../lib/helpers"

export default function ProductTemplate(props) {
  const { data, errors } = props
  const [priceFormatted, setPriceFormatted] = useState(false)

  const product = data && data.product
  if (errors) return <MainLayout>{errors}</MainLayout>

  if (!priceFormatted) {
    product.price = parsePrice(product.price)
    setPriceFormatted(true)
  }

  return (
    <MainLayout>
      <Product product={product} />
    </MainLayout>
  )
}

export const ProductQuery = graphql`
  query ProductQuery($id: String!) {
    product: wpProduct(id: { eq: $id }) {
      name
      description
      ... on WpSimpleProduct {
        id
        name
        content
        price
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        stockQuantity
        stockStatus
      }
    }
  }
`
