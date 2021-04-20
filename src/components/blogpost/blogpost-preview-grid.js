import React from "react"
import styled from "styled-components"
import BlogPostPreview from "./blogpost-preview"


function BlogPostPreviewGrid({ edges, columns = "2", category }) {
  return (
      <Grid column={columns}>
        {edges &&
          edges.map(edge => {
            return (
              <li style={{ justifySelf: "center", width:'100%' }} key={edge.node.id}>
                <BlogPostPreview  {...edge.node} category={category}/>
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
  padding: 1.5rem 0.5rem;

  @media (min-width: 600px) {
    padding: 1.5rem 2rem;
    grid-template-columns: repeat(${props => props.column}, 1fr);
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
