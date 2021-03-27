import Image from "gatsby-image"
import parse from "html-react-parser"
import React from "react"
import styled from "styled-components"
import { parsePrice } from "../../../../lib/helpers"
import AddToCartButton from "../../../cart/add-to-cart-button"
import Button from "../../../_shared/button"
import StockStatus from "../stock-status"

function Product({ product }) {
  const {
    description,
    name,
    featuredImage,
    price,
    stockStatus,
    shortDescription,
  } = product

  return (
    <>
      <div style={{ marginLeft: "5rem", marginTop:'1rem' }}>
        <Button goBack onClick={() => window.history.back()} />
      </div>
      <ProductContainer>
        <figure style={{ flex: 1 }}>
          {featuredImage && (
            <Image
              fluid={featuredImage.node.localFile.childImageSharp.fluid}
              style={{ width: "100%" }}
              alt="produktbilde"
            />
          )}
        </figure>
        <div className="info">
          <h1>{name}</h1>
          <p>{parsePrice(price)} kr</p>
          {description && parse(description)}
          <StockStatus stockStatus={stockStatus} />
          <AddToCartButton product={product} />
          <section className="description">{parse(shortDescription)}</section>
        </div>
      </ProductContainer>
    </>
  )
}

const ProductContainer = styled.article`
  max-width: 980px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  & h1 {
    text-align: left;
  }

  .price {
    font-size: 28px;
  }

  .info {
    flex: 1;
    justify-content: center;
  }

  .description {
    margin-top: 40px;
  }

  @media (min-width: 500px) {
    flex-direction: row;

    h1 {
      margin-bottom: 3rem;
    }
  }

  @media (min-width: 920px) {
    .info {
      margin-left: 1rem;
    }
  }
`

export default Product
