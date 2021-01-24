import { gql } from "@apollo/client"

export const UPDATE_CART_QTY_MUTATION = gql`
  mutation updateCart($input: UpdateItemQuantitiesInput!) {
    updateItemQuantities(input: $input) {
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
