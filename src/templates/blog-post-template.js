import { graphql } from "gatsby"
import React from "react"
import BlogPost from "../components/blogpost/blogpost"
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
            width
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
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
  const formattedExerpt = post.excerpt.replace(/<[^>]*>?/gm, "")
  const SEOImageURL = post.featuredImage && post.featuredImage.node.sourceUrl

  return (
    <MainLayout>
      <SEO
        title={post.title}
        description={formattedExerpt}
        author={post.author.node.name}
        image={SEOImageURL}
      />
      {errors && <div>{errors}</div>}
      <BlogPost {...post} />
    </MainLayout>
  )
}

export default BlogPostTemplate
