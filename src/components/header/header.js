import PropTypes from "prop-types"
import React from "react"
import Logo from "../logo"
import { NavigationDesktop } from "../navigation/navigation"
import Basket from "./basket"
import styles from "./header.module.css"

const Header = ({ siteTitle, openBasket }) => (
  <header className={styles.header}>
    <div className={`${styles.col} ${styles.col_left}`}>
      <NavigationDesktop />
    </div>
    <div className={styles.col}>
      <Logo styles={{ border: "solid" }} />
    </div>
    <div className={styles.col}>
      <Basket openBasket={openBasket} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
