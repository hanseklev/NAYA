import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import MainLayout from "../components/layouts/main-layout"
import ShopList from "../components/shop/product-grid"

const ShopPage = () => {
  const data = useStaticQuery(query)
  const products = data.allWpProduct.edges

  return (
    <MainLayout>
      <h1>Shop</h1>
      <ShopList products={products} />
    </MainLayout>
  )
}

export default ShopPage

const query = graphql`
  query ProductPreviewQuery {
    allWpProduct {
      edges {
        node {
          id
          slug
          name
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
            secondaryImage {
              previewBilde2 {
                sourceUrl
              }
            }
            stockQuantity
            stockStatus
          }
        }
      }
    }
  }
`
