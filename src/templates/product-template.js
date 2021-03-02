import { graphql } from "gatsby"
import React from "react"
import MainLayout from "../components/layout"
import PDPContainer from "../components/shop/product/pdp_container"
import Product from "../components/shop/product/product"

export default function ProductTemplate(props) {
  const { data, errors } = props
  const product = data && data.product

  if (errors) return <MainLayout>{errors}</MainLayout>

  if (product.variations)
    return (
      <MainLayout>
        <PDPContainer product={product} />
      </MainLayout>
    )

  return (
    <MainLayout>
      <Product product={product} />
    </MainLayout>
  )
}

export const ProductQuery = graphql`
  query ProductPageQuery($id: String!) {
    product: wpProduct(id: { eq: $id }) {
      ... on WpSimpleProduct {
        id
        databaseId
        name
        description
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
        shortDescription
      }
      ... on WpVariableProduct {
        id
        databaseId
        name
        description
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
        shortDescription
        variations {
          nodes {
            id
            databaseId
            name
            description
            price
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            stockQuantity
            stockStatus
            attributes {
              nodes {
                name
                value
              }
            }
          }
        }
      }
      attributes {
        nodes {
          visible
          variation
          position
          options
          name
          label
          attributeId
          id
        }
      }
    __typename
    }
  }
`
