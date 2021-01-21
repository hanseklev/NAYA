import { motion } from "framer-motion"
import { graphql, Link, useStaticQuery } from "gatsby"
import { default as Img } from "gatsby-image"
import React, { useState } from "react"
import Price from "../product/Price"
import styles from "./product-preview.module.css"

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
/* const subtitle = {
  on: {
    opacity: 1,
    x: 0,
  },
  off: {
    opacity: 0,
    x: -20,
  },
} */

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
  const { name, id, price } = props.node
  const imageUrl = props.node.featuredImage.node.sourceUrl

  const [isHover, setHover] = useState(false)

  function handleMouseEnter() {
    setHover(true)
  }
  function handleMouseLeave() {
    setHover(false)
  }

  return (
    <>
      <motion.article animate={isHover ? "on" : "off"} initial="off">
        <figure className={styles.product_figure}>
          <motion.div
            variants={bg}
            className={styles.product_bg}
            transition={{
              type: "spring",
              mass: 0.2,
            }}
          >
            {/* <Image className={styles.product_image} /> */}
            {/*  <GatsbyImage
              fluid={images[0].asset.fluid}
              style={{ width: "100%" }}
            /> */}
            <img src={imageUrl} alt="produktbilde" style={{ width: "100%" }} />
          </motion.div>

          <motion.div
            variants={thumb}
            className={styles.product_thumbnail}
            transition={{ type: "spring", mass: 0.5 }}
          >
            <LogoImg />
          </motion.div>
          <Link
            to={`/product/${id}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></Link>
        </figure>
        <h3 className={styles.product_title}>{name}</h3>
        <Price price={price} />
      </motion.article>
    </>
  )
}

const LogoImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      style={{
        width: "80%",
        height: "80%",
      }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default ProductPreview
