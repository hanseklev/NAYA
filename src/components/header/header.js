import PropTypes from "prop-types"
import React, { useContext, useState } from "react"
import { ShopContext } from "../../context/shop-context"
import Logo from "../logo"
import { NavigationDesktop } from "../navigation"
import Basket from "./basket"
import styles from "./header.module.css"

const Header = ({ siteTitle, openBasket }) => {
  const [isHidden, setIsHidden] = useState(false)

  const [cart] = useContext(ShopContext)
  const quantity = cart.totalProductsCount

  if (typeof window !== "undefined") {
    let prevScrollPosition = window.pageYOffset
    window.onscroll = () => {
      window.pageYOffset < prevScrollPosition
        ? setIsHidden(true)
        : setIsHidden(false)
      prevScrollPosition = window.pageYOffset
    }
  }

  return (
    <>
      <header
        className={
          isHidden
            ? `${styles.header}`
            : `${styles.header} ${styles.hideHeader}`
        }
      >
        <div className={`${styles.col} ${styles.col_left}`}>
          <NavigationDesktop />
        </div>
        <div className={styles.col}>
          <Logo styles={{ border: "solid" }} />
        </div>
        <div className={styles.col}>
          <Basket openBasket={openBasket} quantity={quantity} />
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
