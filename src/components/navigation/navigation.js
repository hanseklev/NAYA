import { Link } from "gatsby"
import React, { useState } from "react"
import Burger from "./burgerIcon"
import styles from "./navigation.module.css"

export const NavigationDesktop = ({ hide, location }) => {
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    setShow(!show)
  }

  return (
    <nav className={styles.wrapper}>
      <div className={styles.link_box}>
        <Link className={styles.link} to="/shop">
          Shop
        </Link>
      </div>
      <div className={styles.link_box}>
        <Link className={styles.link} to="/about">
          About
        </Link>
      </div>
      <div className={styles.link_box}>
        <Link className={styles.link} to="/journal">
          Journal
        </Link>
      </div>
      <button
        type="button"
        aria-label="menu"
        className={styles.icon}
        onClick={toggleMenu}
      >
        <Burger isOpen={false} />
      </button>

      {(
        <div
          className={
            show ? `${styles.toggleMenu} ${styles.toggleMenu__transform} ${styles.toggleMenu__show} ${styles.slide}` : `${styles.toggleMenu} ${styles.toggleMenu__transform} ${styles.slide}`
          }
        >
          <button
            className={`${styles.icon} ${styles.icon_active}`}
            type="button"
            aria-label="lukk"
            onClick={toggleMenu}
          >
            <Burger isOpen={true} />
          </button>
          <Link
            to="/about"
            onClick={toggleMenu}
            className={styles.toggleMenu_link}
          >
            about
          </Link>
          <Link
            to="/shop"
            onClick={toggleMenu}
            className={styles.toggleMenu_link}
          >
            shop
          </Link>
          <Link to="/journal" onClick={toggleMenu} className={styles.toggleMenu_link}>
            Journal
          </Link>
        
        </div>
      )}
    </nav>
  )
}