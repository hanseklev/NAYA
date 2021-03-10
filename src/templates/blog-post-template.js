import { graphql } from "gatsby"
import React from "react"
import BlogPost from "../components/Blogpost/blogpost"
import MainLayout from "../components/layout"
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
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
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
      <SEO title={post.title} description={post.excerpt} author={post.author.node.name} />
      {errors && <div>{errors}</div>}
      <BlogPost {...post} />
    </MainLayout>
  )
}

export default BlogPostTemplate
