import { gql } from "@apollo/client"

export const GET_CART = gql`
  query CartQuery {
    cart {
      contents {
        nodes {
          key
          quantity
          total
          subtotal
        }
      }
    }
  }
`

export const GET_CART2 = gql`
  query CartQuery {
    cart {
      contents {
        nodes {
          key
          quantity
          total
          subtotal
          product {
            node {
              name
              databaseId
              id
              ... on SimpleProduct {
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
