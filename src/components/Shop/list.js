import { motion } from "framer-motion"
import React from "react"
import ProductPreview from "../product/product-preview"
import styles from "./shop.module.css"

const ShopList = (props) => {
  return (
    <ul className={styles.ul_wrapper}>
      {props.products.nodes && props.products.nodes.map(p => {
        return (
          <motion.li positionTransition key={p._id}>
            <ProductPreview {...p} />
          </motion.li>
        )
      })}
    </ul>
  )
}

export default ShopList
