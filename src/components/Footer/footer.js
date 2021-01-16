import { Link } from "gatsby"
import React from "react"

import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.col}>
          <h2>Privacy</h2>
          <ul>
            <li>hei </li>
            <li>hade </li>
            <li>hmm </li>
          </ul>
        </section>
        <section className={styles.col}>
          <h2>Information</h2>
          <ul>
            <li>hei </li>
            <li>hade </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </section>
        <div className={styles.col}></div>
      </div>
      <aside className={styles.bottomFooter}>2021</aside>
    </footer>
  )
}

export default Footer
