import { graphql } from "gatsby"
import React from "react"
import BlogPostPreviewGrid from "../components/blogpost/blogpost-preview-grid"
import MainLayout from "../components/layouts/main"

export default function (props) {
  const { data, errors } = props

  if (errors) return <MainLayout>{errors}</MainLayout>

  const postNodes = data && data.posts && data.posts.nodes

  return (
    <MainLayout>
        <h1 style={{textAlign:'center'}}>Journal</h1>
        <BlogPostPreviewGrid nodes={postNodes} />
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
                fixed(width: 350) {
                  ...GatsbyImageSharpFixed
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
