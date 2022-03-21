import React from "react";
import MainLayout from "../components/layout";
import Logo from "../components/logo";
import SEO from "../components/seo";
import { CenteredContainer } from "../components/_shared/styles";

const IndexPage = () => {
  return (
    <MainLayout>
      <SEO title="NAYA" />
      <CenteredContainer>
        <Logo width={"256px"} />
        <h2>Stay tuned</h2>
        <p style={{ textAlign: "center" }}>Big things are going down</p>
      </CenteredContainer>
    </MainLayout>
  );
};

export default IndexPage;
/* 
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
`; */