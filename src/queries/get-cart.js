import { gql } from "@apollo/client"

export const GET_CART_QUERY = gql`
  query GET_CART {
    cart {
      contents {
        nodes {
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
                srcSet
                altText
                title
              }
              galleryImages {
                nodes {
                  id
                  sourceUrl
                  srcSet
                  altText
                  title
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
                srcSet
                altText
                title
              }
            }
            attributes {
              id
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
      subtotal
      subtotalTax
      shippingTax
      shippingTotal
      chosenShippingMethods
      total
      totalTax
      feeTax
      feeTotal
      discountTax
      discountTotal
    }
  }
`
