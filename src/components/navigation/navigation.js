import { Link } from "gatsby"
import React from "react"
import styles from "./navigation.module.css"


/* const NavItem = ({ children }) => ({ children })
 */
export const NavigationDesktop = ({ toggleMenu, ...rest }) => {
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
   {/*    <div className={styles.link_box}>
        <Link className={styles.link} to="/people">
          People
        </Link>
      </div> */}
      <div className={styles.link_box}>
        <Link className={styles.link} to="/journal">
          Journal
        </Link>
      </div>
    
    </nav>
  )
}
