import PropTypes from "prop-types"
import React from "react"
import styles from "./main.module.css"

const ShopLayout = ({ children }) => {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  )
}

ShopLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ShopLayout
