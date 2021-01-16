import { graphql } from "gatsby"
import React from "react"

import MainLayout from "../components/layouts/main"
import Product from "../components/product/Product"

export default function ProductTemplate(props) {
  const { data, errors } = props

  const product = data && data.product

  if (errors) return <MainLayout>{errors}</MainLayout>

  return (
    <MainLayout>
      <Product {...product} />)
    </MainLayout>
  )
}

/*export const ProductQuery = graphql`
  query ProductQuery($id: String!) {
    product: sanityProduct(id: { eq: $id }) {
      _id
      _rawBlurb(resolveReferences: { maxDepth: 10 })
      _rawBody(resolveReferences: { maxDepth: 10 })
      title

      slug {
        current
      }
      defaultProductVariant {
        price
        images {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
` */

/* */
