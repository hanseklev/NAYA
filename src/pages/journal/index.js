import { graphql } from "gatsby"
import React from "react"
import BlogPostPreviewGrid from "../../components/BlogPost/blogpost-preview-grid"
import MainLayout from "../../components/layouts/main"

export default function (props) {
  const { data, errors } = props

  if (errors) return <MainLayout>{errors}</MainLayout>

  const postNodes = data && data.posts && data.posts.nodes

  return (
    <MainLayout>
      <div className="">
        <h1>Journal</h1>
        <BlogPostPreviewGrid nodes={postNodes} />
      </div>
    </MainLayout>
  )
}

export const JournalPageQuery = graphql`
  query MyQuery {
    posts: allWpPost {
      nodes {
        id
        title
        excerpt
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
        date(formatString: "MMMM, DD, YYYY")
      }
    }
  }
`
