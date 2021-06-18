import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import MainLayout from "../components/layout";
import Section from "../components/section";
import SEO from "../components/seo";
import ShopList from "../components/shop/product-grid";

const ShopPage = () => {
  const data = useStaticQuery(query);
  const products = data.allWpProduct.edges;

  const title = "Støtt NAYA";

  return (
    <MainLayout>
      <SEO title={title} />
      <div style={{ marginBottom: "80px" }}>
        <h1>{title}</h1>
        <p style={{ textAlign: "center" }}>
          Vil du være med å støtte oppstarten er dette noen av mulighetene
        </p>
      </div>
      <ShopList products={products} />
      <Section title="Gi en gave">
        <p>Hvis du ønsker å gi et pengebidrag kan du:</p>
        <p>VIPPS: <strong>567092</strong></p>
        <p>Merk beløpet med <i>gave</i></p>
      </Section>
    </MainLayout>
  );
};

export default ShopPage;

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
`;
