import Image from "gatsby-image"
import parse from "html-react-parser"
import React from "react"
import styled from "styled-components"
import { ContentContainer } from "../_shared/styles"

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;

  .left_column {
    min-height: 100px;
    order: 1;
  }

  .right_column{
      order:2;
  }

  @media (min-width: 769px) {
    flex-direction: row;

    min-height: 700px;
    background-color: var(--bg-dark);
    background: -webkit-linear-gradient(
      left,
      var(--bg-primary) 33%,
      var(--bg-dark) 0%
    );
    padding-top: 3rem;

    .left_column {
      flex: 3;
      width: 50px;
    }

    .image {
      width: 300px;
      margin-top: 10%;
      margin-left: 30%;
    }

    .right_column {
      margin-right: 2rem;
      flex: 2;

      & h1,
      h2 {
        text-align: left;
      }
    }
  }
`

const AboutSection = ({ title, image, description, haslink, ...props }) => {
  return (
    <AboutContainer>
      <div className="left_column">
        <div className="image">
          {image && (
            <Image
              fluid={image.childImageSharp.fluid}
              style={{ width: "100%" }}
            />
          )}
        </div>
      </div>
      <div className="right_column">
        <ContentContainer>
          {title && (
            <h1
              style={{
                fontSize: "2.5rem",
              }}
            >
              {title}
            </h1>
          )}
          {description && parse(description)}
        </ContentContainer>
      </div>
    </AboutContainer>
  )
}

export default AboutSection
