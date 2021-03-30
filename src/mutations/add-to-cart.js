import { gql } from "@apollo/client"

/* export const ADD_TO_CART_MUTATION = gql`
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
` */


export const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($input: AddToCartInput!) {
    addToCart(input: $input) {
      cartItem {
        key
        product {
          node {
            id
            databaseId
            name
            description
            type
            onSale
            slug
            averageRating
            reviewCount
            image {
              id
              sourceUrl
              altText
            }
            galleryImages {
              nodes {
                id
                sourceUrl
                altText
              }
            }
          }
        }
        variation {
          node {
            id
            databaseId
            name
            description
            type
            onSale
            price
            regularPrice
            salePrice
            image {
              id
              sourceUrl
              altText
            }
          }
          attributes {
            id
            attributeId
            name
            value
          }
        }
        quantity
        total
        subtotal
        subtotalTax
      }
    }
  }
`
