import { motion } from "framer-motion"
import { Link } from "gatsby"
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

const ProductPreview = props => {
  const { name, price, id } = props.node
  const mainImgUrl =
    props.node.featuredImage && props.node.featuredImage.node.sourceUrl
  const secondaryImgUrl =
    props.node.secondaryImage &&
    props.node.secondaryImage.previewBilde2 &&
    props.node.secondaryImage.previewBilde2.sourceUrl
  
  const [isHover, setHover] = useState(false)

  function handleMouseEnter() {
    setHover(true)
  }
  function handleMouseLeave() {
    setHover(false)
  }

  return (
    <>
      <motion.article
        animate={isHover ? "on" : "off"}
        initial="off"
        className={styles.product}
      >
        <figure className={styles.product_figure}>
          <MainImg url={mainImgUrl} />
          {secondaryImgUrl && <SecondaryImg url={secondaryImgUrl} />}
          <Link
            to={`/product/${id}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </figure>
        <ProductInfo>
          <h3>{name}</h3>
          <span>{parsePrice(price)} kr</span>
        </ProductInfo>
      </motion.article>
    </>
  )
}

const SecondaryImg = ({ url }) => {
  if (url === undefined) {
    return <div></div>
  }

  return (
    <motion.div
      variants={bg}
      className={styles.product_bg}
      transition={{
        type: "spring",
        mass: 0.2,
      }}
    >
      <img
        style={{
          width: "100%",
        }}
        src={url}
        alt="produktbilde"
      />
    </motion.div>
  )
}

const MainImg = ({ url }) => {
  return (
    <motion.div
      variants={thumb}
      className={styles.product_thumbnail}
      transition={{ type: "spring", mass: 0.5 }}
    >
      <img src={url} alt="produktbilde" style={{ width: "100%" }} />
    </motion.div>
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

/* const QuickAddButton = ({ item }) => {
  return (
    <motion.div
      animate={{
        x: 0,
      }}
      whileTap={{
        scale: 1.02,
        x: 10,
      }}
      whileHover={{
        scale: 1.02,
        x: 10,
      }}
    ></motion.div>
  )
} */

export default ProductPreview
