import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { StyledLink } from "../_shared/link"
import { TextBox } from "../_shared/styles"
import Paragraph from "../_shared/text"

const IntroContainer = styled.section`
  padding-bottom: 1rem;

  .image {
    display:block;
    margin: 0;
    padding: 0;
    position: static;
    top: 0;
  }

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr repeat(6, minmax(80px, 140px)) 1fr;
    grid-template-rows: 80px 1fr auto 120px 120px;
    grid-gap: 40px;
    padding-bottom: 0px;

    .image {
      width: 100%;
      grid-column: 4 / span 6;
      grid-row: 2 / span 2;
      position: relative;
      z-index: 1;
    }
  }
`

const IntroSection = ({ title, image, description, ...props }) => {
  return (
    <IntroContainer>
      <TextBox>
        {title && (
          <h1
            style={{
              fontSize: "2.5rem",
              paddingTop: "1rem",
              marginBottom: "1rem",
              lineHeight: "1.2",
            }}
          >
            {title}
          </h1>
        )}

          <Paragraph primary>
          {description}
          <StyledLink
            to="/about"
            style={{ marginBottom: "2rem", display: "block" }}
          >
            Finn ut mer
          </StyledLink>
        </Paragraph>
      </TextBox>
      {image && <Image fluid={image.childImageSharp.fluid} className="image" />}
    </IntroContainer>
  )
}

export default IntroSection
