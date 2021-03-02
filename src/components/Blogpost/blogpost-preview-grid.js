import React from "react"
import styled from "styled-components"
import BlogPostPreview from "./blogpost-preview"


function BlogPostPreviewGrid({ edges }) {
  return (
      <Grid>
        {edges &&
          edges.map(edge => {
            return (
              <li style={{ justifySelf: "center" }} key={edge.node.id}>
                <BlogPostPreview {...edge.node} />
              </li>
            )
          })}
      </Grid>
  )
}

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 46px;
  justify-items: center;
  list-style-type: none;
  max-width: 980px;
  margin: 0 auto;
  padding: 1.5rem 2rem;

  @media (min-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 870px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

/* BlogPostPreview.defaultProps = {
  title: "",
  nodes: [],
} */

export default BlogPostPreviewGrid
