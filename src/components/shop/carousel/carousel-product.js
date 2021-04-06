import { Link } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { parsePrice } from "../../../lib/helpers"

const ProductPreview = ({
  slug,
  mainImg,
  secondaryImg,
  isProduct,
  ...props
}) => {
  return (
      <CarouselImageContainer>
          <Link to={slug}>

        {mainImg && <MainImg className={"main_img"} img={mainImg} />}
        <div className="overlay_img">
          {secondaryImg && (
            <SecondaryImg img={secondaryImg} />
          )}
        </div>
        </Link>

        {isProduct && (
          <ProductInfo>
            <h3>{props.node.name}</h3>
            <span>{parsePrice(props.node.price)} kr</span>
          </ProductInfo>
        )}
      </CarouselImageContainer>
  )
}

const SecondaryImg = ({ img, animate }) => {
  if (img === undefined) {
    return <div></div>
  }
  return (
    <Image
      style={{
        width: "100%",
      }}
      fluid={img.childImageSharp.fluid}
      alt="produktbilde"
    />
  )
}

const MainImg = ({ img }) => {
  return (
    <div>
      <Image
        fluid={img.childImageSharp.fluid}
        alt="produktbilde"
        style={{ width: "100%" }}
      />
    </div>
  )
}

const ProductInfo = styled.section`
  text-align: right;
  padding-right: 1rem;

  h3 {
    text-align: right;
    margin-top: 0.25rem;
    color: grey;
    font-size: 14px;
    margin-bottom: 0.25rem;
  }
`

const CarouselImageContainer = styled.article`
  position: relative;
  margin-bottom: 4rem;
  width: 100%;

  .main_img {
    display: block;
    width: 100%;
    height: auto;
  }

  .overlay_img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  &:hover .overlay_img {
    opacity: 1;
  }
`

export default ProductPreview
