import React from "react"
import styled from "styled-components"
import { Paragraph, StyledLink, TextBox } from "../../_shared/styles"
import ProductPreview from "../product-preview/index2"

const ProductCarousel = ({ title, description, items }) => {
  return (
    <CarouselWrapper>
      {(description || title) && (
        <TextBox style={{ backgroundColor: "inherit", marginBottom: "3rem" }}>
          {title && (
            <h2
              style={{
                fontSize: "2.5rem",
                paddingTop: "1rem",
                marginBottom: "1rem",
                lineHeight: "1.2",
              }}
            >
              {title}
            </h2>
          )}
          {description && <Paragraph center>{description}</Paragraph>}
        </TextBox>
      )}
      {items.length > 0 &&
        items.map((item, idx) => {
          return (
            <ProductPreview
              key={`${idx}id`}
              mainImg={item[0].localFile}
              secondaryImg={item[1].localFile}
              slug="shop"
              className="product"
            />
          )
        })}

      <TextBox
        style={{
          margin: "auto",
          textAlign: "left",
          backgroundColor: "inherit",
          minHeight: "200px",
        }}
      >
        <h3 style={{ textAlign: "left" }}>Noe for en hver smak..</h3>
        <StyledLink weight="400" size="14px" to="/shop">
          Sjekk ut flere produkter her
        </StyledLink>
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
    padding-left: 2rem;
    columns: auto 2;
    column-gap: 40px;
  }

  .product {
    width: 100%;
    padding: 0 1rem;
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

/*

  <a href="/shop" key={item.id} className="item" key={idx}>
              <div className="item-title">
                <h3
                  style={{
                    marginLeft: "auto",
                    color: "var(--color-text)",
                    textAlign: "right",
                  }}
                >
                  En bag
                </h3>
              </div>

              */
