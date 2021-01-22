import React from "react"
import BlogPostPreview from "./blogpost-preview"

function BlogPostPreviewGrid({ nodes }) {
  return (
    <div>
      <ul style={style}>
        {nodes &&
          nodes.map(node =>  {
            if (node.featuredImage === null) node.featuredImage = {}
            return (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          )})}
      </ul>
    </div>
  )
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin:' 0 2rem',
  padding: '0',
  listStyle: 'none'
}

/* BlogPostPreview.defaultProps = {
  title: "",
  nodes: [],
} */

export default BlogPostPreviewGrid
