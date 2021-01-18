import { graphql } from "gatsby"
import React from "react"
import BlogPost from "../components/blogpost/blogpost"
import MainLayout from "../components/layouts/main"
import SEO from "../components/seo"

export const query = graphql`
  query BlogPostQuery($id: String!) {
    post: wpPost(id: { eq: $id }) {
      id
      slug
      excerpt
      title
      date(formatString: "DD.MM.YY")
      content
      author {
        node {
          name
          description
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          localFile {
            childrenImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post

  return (
    <MainLayout>
      <SEO title={post.title} />
      {errors && <div>{errors}</div>}
      <BlogPost {...post} />
    </MainLayout>
  )
}

export default BlogPostTemplate
