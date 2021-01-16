import React from "react"
import BlogPostPreview from "./blogpost-preview"

import styles from "./blogpreview.module.css"

function BlogPostPreviewGrid({ nodes }) {
  return (
    <div>
      <h2 className={styles.gridHeader}>Hei</h2>
      <ul className={styles.grid}>
        {nodes &&
          nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

/* BlogPostPreview.defaultProps = {
  title: "",
  nodes: [],
} */

export default BlogPostPreviewGrid
