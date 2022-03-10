import { graphql } from "gatsby";
import React from "react";
import MainLayout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";

const IndexPage = ({ data }) => {
  return (
    <MainLayout>
      <SEO title="NAYA" />
      <Hero
        title={data.indexPage.hero.herotitle}
        desktopImage={data.indexPage.hero.heroimagedesktop.localFile}
      />
      <div>
        <h2>Stay tuned</h2>
        <p style={{ textAlign: "center" }}>Big things are going down</p>
      </div>
    </MainLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    indexPage: wpPage(id: { eq: "cG9zdDozMzM5" }) {
      title
      hero {
        herotitle
        herodescription
        heroimagedesktop {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1280
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          altText
        }
      }
    }
  }
`;

/* 
const query = graphql`
  query IndexQuery {
    page(id: { eq: "cG9zdDozMzM5" }) {
      title

      topsection {
        topsectiontitle
        topsectiondescription
        topsectionimage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 920) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
      showcase: productPreviewImages {
        imageOne {
          ... on WpMediaItem {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
        imageTwo {
          ... on WpMediaItem {
            id
            title
            localFile {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
        showcasetitle
        showcasedescription
      }
    }
  }
`; */

/*
 <Hero
              hasText={true}
              desktopImage={hero.heroimagedesktop.localFile}
              mobileImage={hero.heroimagemobile.localFile}
              title={hero.herotitle}
              fullHeight
            /> 
   hero {
        herotitle
        heroimagemobile {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        heroimagedesktop {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2400) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }*/
