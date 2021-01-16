import Img from "gatsby-image"
import React from "react"

const HeaderImage = ({ featuredImage }) => {
  const { localFile, altText } = featuredImage.node

  return (
    <>
      <Img
        style={{ "width:": "300px" }}
        fluid={localFile.childImageSharp.fluid}
        alt={altText}
      />
    </>
  )
}

export default HeaderImage
