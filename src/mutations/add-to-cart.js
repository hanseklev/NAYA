import { gql } from "@apollo/client"

export const ADD_TO_CART_QUERY = gql`
  mutation addToCart($input: Int!) {
    addToCart(input: { productId: $input }) {
      cart {
        contents {
          nodes {
            key
            product {
              node {
                name
                id
                databaseId
                slug
                image {
                  id
                  sourceUrl
                  altText
                }
                ... on SimpleProduct {
                  id
                  name
                  price(format: RAW)
                }
              }
            }
            subtotal
            quantity
            total
          }
        }
        total
      }
    }
  }
`
