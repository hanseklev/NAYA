import GatsbyImage from "gatsby-image"
import React from "react"

import styled from "styled-components"

const Section = ({ title, image, text, children }) => (
  <Container>
    {children}
      <Title>{title}</Title>
    <Paragraph>{text}</Paragraph>
    <ImageContainer>
      {image && (
        <GatsbyImage
          style={{ width: "100%" }}
          fixed={image.childImageSharp.fixed}
        />
      )}
    </ImageContainer>
  </Container>
)

const Container = styled.section`
  display: flex;
  background-color: ${props => props.bgColor || 'var(--bg-primary)'};
  justify-content: center;
  align-items: center;
  margin: 2rem 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`

const Title = styled.h2`
  text-align: left;
  font-size: 16px;
  color: #655a46;
  margin-bottom: 0.4rem;
`

const Paragraph = styled.p`
  font-family: "Proxima Nova";
  font-weight: lighter;
  font-size: 14px;
  max-width: 650px;
  line-height: 1.6rem;
  text-align: justify;
`

const ImageContainer = styled.div`
`
export default Section
