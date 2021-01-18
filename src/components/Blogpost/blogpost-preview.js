import { Link } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"
import { getBlogUrl } from "../../lib/helpers"
import styles from "./blogpost-preview.module.css"
import parse from 'html-react-parser'

const BlogPostPreview = props => {
  const thumbImg =
    props.featuredImage.node.localFile.childImageSharp &&
    props.featuredImage.node.localFile.childImageSharp.fixed

  return (
    <Link to={getBlogUrl(props.slug)} className={styles.container}>
        {thumbImg && <GatsbyImage fixed={thumbImg} style={{ width: "100%", heigth: '240px'}} />}
      <div className={styles.block}>
        <h3>{props.title}</h3>
        {props.excerpt && parse(props.excerpt)}
      </div>
    </Link>
  )
}


export default BlogPostPreview
