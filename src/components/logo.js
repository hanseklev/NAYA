import { graphql, Link, StaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"

const Logo = () => {
  return(
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "NAYA_logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <GatsbyImage fluid={data.file.childImageSharp.fluid}/>
    )}
  />)
}

export default () => (
  <div style={{ width: "78px" }}>
    <Link to="/">
      <Logo />
    </Link>
  </div>
)