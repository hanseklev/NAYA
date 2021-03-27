import { motion } from "framer-motion"
import { Link } from "gatsby"
import Image from "gatsby-image"
import React, { useState } from "react"
import styled from "styled-components"
import { parsePrice } from "../../../lib/helpers"
import { StyledLink } from "../../_shared/styles"

const bg = {
  on: {
    opacity: 1,
    scale: 1,
  },
  off: {
    opacity: 0,
    scale: 1.4,
  },
}

const thumb = {
  on: {
    opacity: 0,
    y: "100%",
  },
  off: {
    opacity: 1,
    y: 0,
  },
}

const ProductPreview = ({
  mainImg,
  secondaryImg,
  isProduct,
  slug,
  ...props
}) => {
  const [isHover, setHover] = useState(false)

  function handleMouseEnter() {
    setHover(true)
  }
  function handleMouseLeave() {
    setHover(false)
  }

  return (
    <motion.article
      animate={isHover ? "on" : "off"}
      initial="off"
    >
      <FigureContainer>
        {mainImg && <MainImg img={mainImg} />}
        {secondaryImg && <SecondaryImg img={secondaryImg} />}
        <Link
          to={slug}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="link"
        />
      </FigureContainer>
      {isProduct && (
        <ProductInfo>
          <h3><StyledLink to={slug}>{props.node.name}</StyledLink></h3>
          <span>{parsePrice(props.node.price)} kr</span>
        </ProductInfo>
      )}
    </motion.article>
  )
}

const SecondaryImg = ({ img }) => {
  if (img === undefined) {
    return <div></div>
  }

  return (
    <motion.div
      variants={bg}
      className="secondary-img"
      transition={{
        type: "spring",
        mass: 0.2,
      }}
    >
      <Image
        style={{
          width: "100%",
        }}
        fluid={img.childImageSharp.fluid}
        alt="produktbilde"
      />
    </motion.div>
  )
}

const MainImg = ({ img }) => {
  return (
    <motion.div
      variants={thumb}
      className="main-img"
      transition={{ type: "spring", mass: 0.5 }}
    >
      <Image
        fluid={img.childImageSharp.fluid}
        alt="produktbilde"
        style={{ width: "100%" }}
      />
    </motion.div>
  )
}

const FigureContainer = styled.figure`
  background-color: inherit; /*var(--bg-secondary)*/
  position: relative;
  padding: 0;
  margin: 0;
  overflow: hidden;
  width: 300px;
  min-height: 388px;

  .main-img {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .secondary-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .link {
    position:absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
  }
`

const ProductInfo = styled.section`
  text-align: right;
  padding-top: 0.5rem;
  padding-right: 0.5rem;

  h3 {
    text-align: right;
    margin-top: 0.25rem;
    color: grey;
    font-size: 14px;
    margin-bottom: 0.25rem;
  }
`

export default ProductPreview
