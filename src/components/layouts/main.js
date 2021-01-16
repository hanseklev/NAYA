import PropTypes from "prop-types"
import React from "react"
import Footer from "../Footer/footer"
import Header from "../header/header"
import styles from "./main.module.css"

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer/>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
