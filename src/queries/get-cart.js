import { gql } from "@apollo/client"

export const GET_CART = gql`
  query CartQuery {
    cart {
      contents {
        nodes {
          product {
            node {
              name
              ... on SimpleProduct {
                id
                name
                price(format: RAW)
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
          total
          subtotal
          quantity
        }
      }
    }
  }
`

export const GET_CART_TOTAL = gql`
  query CartTotalQuery {
    cart {
      total
    }
  }
`
