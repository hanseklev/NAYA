import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import MainLayout from "../components/layout"
import SEO from "../components/seo"
import ShopList from "../components/shop/product-grid"
import { Paragraph } from "../components/_shared/styles"

const ShopPage = () => {
  const data = useStaticQuery(query)
  const products = data.allWpProduct.edges

  const title = "Shop"

  return (
    <MainLayout>
      <SEO title={title} />
      <div style={{ marginBottom: "80px" }}>
        <h1>{title}</h1>
        <Paragraph center>
          Vi jobber med å få på plass ny betalingsløsning.<br/> I mellomtiden kan du nyte
          en kaffe i sola :)
        </Paragraph>
      </div>
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
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            customProduct {
              secondaryimage {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            stockQuantity
            stockStatus
          }
          ... on WpVariableProduct {
            id
            name
            content
            price
            slug
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            customProduct {
              secondaryimage {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
