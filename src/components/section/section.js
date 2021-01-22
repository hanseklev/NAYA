import GatsbyImage from "gatsby-image"
import React from "react"

import styles from "./section.module.css"

const Section = ({ title, image, text, children }) => (
  <section className={styles.container}>
    {children}
    <div className={styles.col}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{text}</p>
    </div>
    <div className={styles.col}>
      {image && <GatsbyImage style={{ width: "100%" }} fixed={image} />}
    </div>
  </section>
)

export default Section
