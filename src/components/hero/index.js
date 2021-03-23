import GatsbyImage from "gatsby-image"
import React from "react"
import styled from "styled-components"

const heroHeight = ["240px","240px", "300px"]

const Hero = ({
  title,
  textAlign, 
  hasText = false,
  desktopImage,
  mobileImage,
  fullHeight,
}) => {
  if (!desktopImage) return null
  return (
    <Container fullHeight={fullHeight}>
      <BackgroundImage>
        {mobileImage ? (
          <GatsbyImage
            fluid={[
              mobileImage.childImageSharp.fluid,
              {
                ...desktopImage.childImageSharp.fluid,
                media: `(min-width: 550px)`,
              },
            ]}
            style={{ width: "100%"}}
          />
        ) : (
          <GatsbyImage
            fluid={desktopImage.childImageSharp.fluid}
            objectFit="cover"
            style={{ height: "100%", width: "100%" }}
          />
        )}
      </BackgroundImage>
      {hasText && (
        <ForegroundContainer fullHeight={fullHeight}>
          <TextBox>
            <Title align={textAlign}>{title}</Title>
          </TextBox>
        </ForegroundContainer>
      )}
    </Container>
  )
}

export default Hero

const Container = styled.header`
  position: relative;
  width: 100%;
  padding: 0;
  overflow: hidden;

  height: ${props => (props.fullHeight ? "570px" : heroHeight[0])};

  @media (min-width: 550px) {
    height: ${heroHeight[1]};
  }

  @media (min-width: 769px) {
    height: ${heroHeight[2]};
  }
`

const BackgroundImage = styled.div`
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`

const ForegroundContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: ${heroHeight[0]};

  ${props =>
    props.fullHeight &&
    "height: 570px; align-items: center; "}

  @media (min-width: 550px) {
    height: ${heroHeight[1]};
    align-items: center;
  }

  @media (min-width: 768px) {
    height: ${heroHeight[2]};
    align-items: center;
  }
`

const TextBox = styled.div`
  display: block;
  color: rgb(255, 255, 255);
  text-align: ${props => props.align || 'center'};
  padding: 0px;
  z-index: 51;
  margin: 0 auto;
  width: 100%;
`

const Title = styled.h1`
  color: var(--color-secondary);
  font-weight: 400;
  font-style: normal;
  font-size: 3rem;
  line-height: 110%;

  @media (min-width: 550px) {
    font-size: 3rem;
    text-align: ${props => props.align };
    padding-left: 5rem;
  }
`
