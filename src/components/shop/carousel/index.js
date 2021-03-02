import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { TextBox } from "../../_shared/styles"
import Paragraph from "../../_shared/text"

const ProductCarousel = ({ title, description, items }) => {
  return (
    <CarouselWrapper>
      {(description || title) && (
        <TextBox style={{ backgroundColor: "inherit" }}>
          {title && (
            <h1
              style={{
                fontSize:'2.5rem',
                paddingTop: "1rem",
                marginBottom: "1rem",
                lineHeight: "1.2",
              }}
            >
              {title}
            </h1>
          )}
          {description && <Paragraph primary>{description}</Paragraph>}
        </TextBox>
      )}
      {items.length > 0 &&
        items.map(item => (
          <a href="/shop" key={item.id} className="item">
            <div className="item-title">
              <h3 style={{ marginRight: "auto" }}>En bag</h3>
            </div>
           {item.localFile && <Image
              alt={item.altText}
              fluid={item.localFile.childImageSharp.fluid}
            />}
          </a>
        ))}
      <TextBox
        style={{
          padding: "3rem",
          margin: 'auto',
          textAlign: "center",
          backgroundColor: "inherit",
          minHeight:'200px'
        }}
      >
        <h3>Noe for en hver smak..</h3>
        Sjekk ut mer her
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

  @media (min-width: 900px) {
    padding: 120px 0;
    columns: auto 2;
    column-gap: 40px;
  }

  .item {
    display: block;
    position: relative;
    margin-bottom: 40px;
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
      color: white;
      z-index: 2;
      align-items: center;
    }
    header,
    footer {
      margin-bottom: 40px;
    }
  }
`
