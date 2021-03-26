import { gql } from "@apollo/client"

export const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($input: Int!) {
    addToCart(input: { productId: $input }) {
      cart {
        subtotal
        shippingTotal
        total
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
            quantity
            total
          }
        }
      }
    }
  }
`
