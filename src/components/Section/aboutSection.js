import GatsbyImage from "gatsby-image"
import React from "react"

import styles from "./section.module.css"

const AboutSection = ({ title, image, text }) => (
  <section className={styles.container}>
    <>
      <div className={styles.col}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{text}</p>
      </div>
      <div className={styles.col}>
        <GatsbyImage fixed={image} />
      </div>
    </>
  </section>
)

export default AboutSection
