import { graphql } from "gatsby"
import React from "react"

import MainLayout from "../components/layouts/main"
import Product from "../components/product/Product"

export default function ProductTemplate(props) {
  const { data, errors } = props

  const product = data && data.product

  if (errors) return <MainLayout>{errors}</MainLayout>
  console.log(product);

  return (
    <MainLayout>
      <Product {...product} />)
    </MainLayout>
  )
}

export const ProductQuery = graphql`
  query ProductQuery ($id: String!) {
  wpProduct(id: {eq: $id}) {
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
