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
    margin-top: ${props => props.flip && "-280px"};
    min-height: ${props => (props.flip ? "730px" : "730px")};

    ${props =>
      props.background &&
      "background-color: var(--bg-dark); background: -webkit-linear-gradient(left, var(--bg-primary) 33%, var(--bg-dark) 0%);"};
    h2 {
      font-size: 2.5rem !important;
    }

    .image_column {
      flex: 1;
      width: 50px;
    }

    .image {
      max-width: 300px;
      margin-top: 15vh;
      margin-left: ${props => (props.flip ? "5vh" : "33%")};
    }

    .text_column {
      margin-right: 2rem;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      ${props =>
        props.flip && "margin-left: 15%; max-width: 350px; margin-top: 10rem;}"};
      margin-left: ${props => (props.flip ? "0" : "3rem")};

      p {
        width: 350px;
      }

      & h2,
      h3 {
        text-align: ${props => (props.flip ? "left" : "left")};
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
        <ContentContainer className="text">
          {title && <h2>{title}</h2>}
          {description && parse(description)}
        </ContentContainer>
      </div>
    </AboutContainer>
  )
}

export default AboutSection
