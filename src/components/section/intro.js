import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { TextBox, Paragraph, StyledLink } from "../_shared/styles";

const IntroContainer = styled.section`
  .image {
    display: block;
    margin: 0;
    padding: 0;
    position: static;
    top: 0;
  }

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr repeat(6, minmax(80px, 140px)) 1fr;
    grid-template-rows: 80px 1fr auto 120px 20px;
    grid-gap: 40px;
    padding-bottom: 0px;

    .image {
      width: 80%;
      grid-column: 4 / span 6;
      grid-row: 2 / span 2;
      position: relative;
      z-index: 1;
    }
  }
`;

const IntroSection = ({ title, image, description, haslink, ...props }) => {
  return (
    <IntroContainer>
      <TextBox>
        {title && (
          <h2
            style={{
              fontSize: "2.5rem",
              padding: "1rem 0",
              lineHeight: "1.2",
              margin: "0",
            }}
          >
            {title}
          </h2>
        )}

        <Paragraph primary>
          {description}
          {haslink && (
            <StyledLink
              to="/about"
              size="14px"
              weight="bold"
              style={{ margin: "1rem 0", display: "block" }}
            >
              LES MER
            </StyledLink>
          )}
        </Paragraph>
      </TextBox>
      {image && <Image fluid={image.childImageSharp.fluid} className="image" />}
    </IntroContainer>
  );
};

export default IntroSection;
