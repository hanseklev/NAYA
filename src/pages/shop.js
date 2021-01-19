import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import MainLayout from "../components/layouts/main"
import ShopList from "../components/Shop/list"

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
  query ShopQuery {
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
            stockQuantity
            stockStatus
          }
        }
      }
    }
  }
`
