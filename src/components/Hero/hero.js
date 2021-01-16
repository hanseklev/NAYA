import { graphql, StaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"

import styles from "./hero.module.css"

const Hero = ({ title }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "hero-crop.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div className={styles.container}>
          <GatsbyImage
            className={styles.image}
            fluid={data.file.childImageSharp.fluid}
          />
          <div className={styles.foreground}>
            <h1 className={styles.title}>{title}</h1>
            <button className={styles.shopButton}>Shop Now</button>
          </div>
        </div>
      )}
    />
  )
}

export default Hero
