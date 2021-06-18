import GatsbyImage from "gatsby-image";
import React from "react";

import styled from "styled-components";

const Section = ({ title, image, text, children }) => (
  <Container bgColor="var(--bg-secondary)">
    <Title>{title}</Title>
    {children}
    {image && (
      <ImageContainer>
        <GatsbyImage
          style={{ width: "100%" }}
          fixed={image.childImageSharp.fixed}
        />
      </ImageContainer>
    )}
  </Container>
);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.bgColor || "var(--bg-primary)"};
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  padding: 2rem;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  color: #655a46;
  margin-bottom: 0.4rem;
`;

const Paragraph = styled.p`
  font-family: "Proxima Nova";
  font-weight: lighter;
  font-size: 14px;
  max-width: 650px;
  line-height: 1.6rem;
  text-align: justify;
`;

const ImageContainer = styled.div``;
export default Section;
