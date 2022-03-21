import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const heroHeight = ["180px", "240px", "300px"];

type HeroProps = {
  title?: string;
  textAlign?: string;
  fullHeight?: boolean;
  desktopImage: IGatsbyImageData;
  ml?: string;
};

const Hero = ({ title, desktopImage, fullHeight, ml }: HeroProps) => {
  if (!desktopImage) return null;
  const image = getImage(desktopImage);

  return (
    <div style={{ display: "grid" }}>
      <GatsbyImage style={{ gridArea: "1/1" }} image={image} alt="" />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        {title && <h1>{title}</h1>}
      </div>
    </div>
  );
};

export default Hero;

const Container = styled.header<{ fullHeight: boolean }>`
  position: relative;
  width: 100%;
  padding: 0;
  overflow: hidden;

  height: ${(props) => (props.fullHeight ? "570px" : heroHeight[0])};

  @media (min-width: 550px) {
    height: ${heroHeight[1]};
  }

  @media (min-width: 769px) {
    height: ${heroHeight[2]};
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  .filter {
    filter: brightness(65%);
  }
`;

const ForegroundContainer = styled.div<{ fullHeight: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: ${heroHeight[0]};

  ${(props) => props.fullHeight && "height: 570px; align-items: center; "}

  @media (min-width: 550px) {
    height: ${heroHeight[1]};
    align-items: center;
  }

  @media (min-width: 768px) {
    height: ${heroHeight[2]};
    align-items: center;
  }
`;

const TextBox = styled.div<{ align?: string }>`
  display: block;
  color: rgb(255, 255, 255);
  text-align: ${(props) => props.align || "center"};
  padding: 0px;
  z-index: 51;
  margin: 0 auto;
  width: 100%;
`;

const Title = styled.h1<{ align: string; ml: string }>`
  color: var(--color-secondary);
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  line-height: 110%;

  @media (min-width: 769px) {
    font-size: 2.5rem;
    text-align: ${(props) => props.align};
    padding-left: ${(props) => props.ml || 0};
  }

  @media (min-width: 769px) {
    font-size: 3rem;
    text-align: ${(props) => props.align};
    padding-left: ${(props) => props.ml || 0};
  }
`;
