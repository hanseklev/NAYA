import { motion } from "framer-motion"
import { Link } from "gatsby"
import Image from "gatsby-image"
import React, { useState } from "react"
import styled from "styled-components"
import { parsePrice } from "../../../lib/helpers"
import styles from "./index.module.css"

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
  hasAnimate,
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

  if (hasAnimate)
    return (
      <motion.article
        animate={isHover ? "on" : "off"}
        initial="off"
        className={styles.product}
      >
        <figure className={styles.product_figure}>
          {mainImg && <MainImg animate={hasAnimate} img={mainImg} />}
          {secondaryImg && (
            <SecondaryImg animate={hasAnimate} img={secondaryImg} />
          )}
          <Link
            to={slug}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </figure>
        {isProduct && (
          <ProductInfo>
            <h3>{props.node.name}</h3>
            <span>{parsePrice(props.node.price)} kr</span>
          </ProductInfo>
        )}
      </motion.article>
    )
  else
    return (
      <CarouselImageContainer>
        {mainImg && <MainImg className={"main_img"} img={mainImg} />}
        <div className="overlay_img">
          {secondaryImg && (
            <SecondaryImg animate={hasAnimate} img={secondaryImg} />
          )}
        </div>
      </CarouselImageContainer>
    )
}

const SecondaryImg = ({ img, animate }) => {
  if (img === undefined) {
    return <div></div>
  }

  if (animate)
    return (
      <motion.div
        variants={bg}
        className={styles.product_bg}
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
  else
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

const MainImg = ({ img, animate }) => {
  if (animate)
    return (
      <motion.div
        variants={thumb}
        className={styles.product_thumbnail}
        transition={{ type: "spring", mass: 0.5 }}
      >
        <Image
          fluid={img.childImageSharp.fluid}
          alt="produktbilde"
          style={{ width: "100%" }}
        />
      </motion.div>
    )
  else
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
  width: 80%;
  margin-bottom: 4rem;

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
