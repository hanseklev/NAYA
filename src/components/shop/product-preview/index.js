import { motion } from "framer-motion"
import { Link } from "gatsby"
import React, { useState } from "react"
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
  const { name, id, price } = props.node
  const imageUrl = props.node.featuredImage.node.sourceUrl
  const secondaryUrl =
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
            <LogoImg url={secondaryUrl} />
          </motion.div>
          <Link
            to={`/product/${id}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></Link>
        </figure>
        <h3 className={styles.product_title}>{name}</h3>
        <span className={styles.product_price}>{parsePrice(price)} kr</span>
      </motion.article>
    </>
  )
}

const LogoImg = ({ url }) => {
  if (url === undefined) {
    return <div>Picture not found</div>
  }

  return (
    <img
      style={{
        width: "100%",
        height: "80%",
      }}
      src={url}
      alt="produktbilde"
    />
  )
}

export default ProductPreview
