import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { TextBox, Paragraph, StyledLink } from "../../_shared/styles"

const ProductCarousel = ({ title, description, items }) => {
  return (
    <CarouselWrapper>
      {(description || title) && (
        <TextBox style={{ backgroundColor: "inherit", marginBottom:'3rem' }}>
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
          {description && <Paragraph center>{description}</Paragraph>}
        </TextBox>
      )}
      {items.length > 0 &&
        items.map(item => (
          <a href="/shop" key={item.id} className="item">
            <div className="item-title">
              <h3 style={{ marginLeft: "auto", color: "var(--color-text)" , textAlign:'right'}}>
                En bag
              </h3>
            </div>
            {item.localFile && (
              <Image
                alt={item.altText}
                fluid={item.localFile.childImageSharp.fluid}
                width="80%"
              />
            )}
          </a>
        ))}
      <TextBox
        style={{
          padding: "1rem",
          margin: "auto",
          textAlign: "center",
          backgroundColor: "inherit",
          minHeight: "200px",
        }}
      >
        <h2>Noe for en hver smak..</h2>
      <StyledLink weight="600" to="/shop" >Sjekk ut flere produkter her</StyledLink>
      </TextBox>
    </CarouselWrapper>
  )
}

export default ProductCarousel

const CarouselWrapper = styled.section`
  background-color: var(--bg-primary);
  margin: 0 auto;
  padding-bottom: 2rem;
  max-width: 1166px;

  @media (min-width: 600px) {
    padding: 120px 0;
    columns: auto 2;
    column-gap: 40px;
  }

  .item {
    display: block;
    position: relative;
    margin-bottom: 60px;
    overflow: hidden;

    .gatsby-image-wrapper,
    .pushes-title-arrow {
      transition: all 250ms ease-in-out;
    }

    &:hover {
      .gatsby-image-wrapper {
        transform: scale(1.1);
      }
      .pushes-title-arrow {
        transform: translateX(-1em);
      }
    }

    &-title {
      display: flex;
      font-family: var(--font-text);
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 2rem;
      z-index: 2;
      align-items: center;

      h3 {
        color: var(--bg-secondary);
      }
    }
    header,
    footer {
      margin-bottom: 40px;
    }
  }
`
