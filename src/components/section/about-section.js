import Image from "gatsby-image"
import parse from "html-react-parser"
import React from "react"
import styled from "styled-components"
import { ContentContainer } from "../_shared/styles"

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;

  .image_column {
    min-height: 100px;
    order: 1;
  }

  .text_column {
    order: 2;
  }

  @media (min-width: 769px) {
    flex-direction: ${props => (props.flip ? "row-reverse" : "row")};
    align-items: center;
    justify-content: center;
    margin-top: ${props => props.flip && "-250px"};

    min-height: 700px;
    ${props =>
      props.background &&
      "background-color: var(--bg-dark); background: -webkit-linear-gradient(left, var(--bg-primary) 33%, var(--bg-dark) 0%);"};
    padding-top: 3rem;

    h2 {
      font-size: 2.5rem;
    }

    .image_column {
      flex: 1;
      width: 50px;
    }

    .image {
      width: 300px;
      margin-top: 10%;
      margin-left: 30%;
    }

    .text_column {
      margin-right: 2rem;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;

      p {
        ${props => props.flip && "margin-left: 4rem; }"};
      }

      & h2,
      h3 {
        text-align: ${props => (props.flip ? "center" : "left")};
      }
    }
  }
`

const AboutSection = ({ title, image, description, color, flipped }) => {
  return (
    <AboutContainer background={color} flip={flipped}>
      <div className="image_column">
        <div className="image">
          {image && (
            <Image
              fluid={image.childImageSharp.fluid}
              style={{ width: "100%" }}
            />
          )}
        </div>
      </div>
      <div className="text_column">
        <ContentContainer>
          {title && <h2>{title}</h2>}
          {description && parse(description)}
        </ContentContainer>
      </div>
    </AboutContainer>
  )
}

export default AboutSection
