import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { LeftArrow } from "../../left-arrow"
import styles from "../layout.module.css"

const ShopLayout = ({ children, title }) => {
  return (
    <>
      <header className={styles.header}>
        <button onClick={() => navigate('/shop')} className={styles.backButton}>
          <LeftArrow className={styles.arrow} />
        </button>

        <h1>{title}</h1>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  )
}

ShopLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ShopLayout
