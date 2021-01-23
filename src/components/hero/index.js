import { graphql, navigate, StaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"
import styles from "./index.module.css"


const Hero = ({ title, hasText = false }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "hero-crop.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          mobile: file(relativePath: { eq: "hero-mobile.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 2160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => (
        <div className={styles.container}>
          <div className={styles.bgImage}>
            <GatsbyImage
              fluid={[
                data.mobile.childImageSharp.fluid,
                {
                  ...data.desktop.childImageSharp.fluid,
                  media: `(min-width: 769px)`,
                },
              ]}
            />
          </div>
          {hasText && (
            <div className={styles.foreground}>
              <h1 className={styles.title}>{title}</h1>
              <button onClick={(()=>{navigate('/shop')})} className={styles.shopButton}>Shop Now</button>
            </div>
          )}
        </div>
      )}
    />
  )
}

export default Hero