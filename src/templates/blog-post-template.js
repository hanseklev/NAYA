import { graphql } from "gatsby"
import React from "react"
import BlogPost from "../components/BlogPost/blogpost"
import MainLayout from "../components/layouts/main"

export const query = graphql`
  query BlogPostQuery($id: String!) {
    post: wpPost(id: { eq: $id }) {
      id
      slug
      excerpt
      title
      date
      content
      author {
        node {
          name
        }
      }
    }
  }
`

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post
  console.log(post)

  return (
    <MainLayout>
      {errors && <div>{errors}</div>}
      <BlogPost {...post} />
    </MainLayout>
  )
}

export default BlogPostTemplate
