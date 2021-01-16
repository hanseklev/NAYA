import { Link } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"
import { getBlogUrl } from "../../lib/helpers"
import styles from "./blogpreview.module.css"

const BlogPostPreview = props => {
  const featuredImage = props.featuredImage.node.localFile.childImageSharp.fluid
  return (
    <Link to={getBlogUrl(props.slug)} className={styles.inList}>
      <div className={styles.thumbImg}>
        {featuredImage && <GatsbyImage fluid={featuredImage} />}
      </div>
      <div className={styles.text}>
        <h3>{props.title}</h3>
        {props.excerpt && (
          <div className={styles.excerpt}>
            <div dangerouslySetInnerHTML={{ __html: props.excerpt }}></div>
          </div>
        )}
        <p>{props.date}</p>
      </div>
    </Link>
  )
}

export default BlogPostPreview
