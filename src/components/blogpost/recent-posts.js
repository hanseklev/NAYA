import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Paragraph, Section, StyledLink } from "../_shared/styles"
import BlogPostPreviewGrid from "./blogpost-preview-grid"

const RecentPosts = ({ dark }) => {
  const data = useStaticQuery(query)

  const postEdges = data && data.postsPreview && data.postsPreview.edges

  return (
    <>
      <Section dark={dark}>
        <h2 style={{ fontSize: "2.5rem" }}>Journal</h2>
        <Paragraph style={{ textAlign: "center", fontSize: "16px", textTransform:'uppercase', maxWidth:'550px', margin:'0 auto' }}>
        Her finner du noen innlegg om temaer som betyr mye for oss, og noe inspirerende for hverdagen
        </Paragraph>
      </Section>
      <BlogPostPreviewGrid edges={postEdges} columns={1} />
    </>
  )
}

export const query = graphql`
  query RecentPostsQuery {
    postsPreview: allWpPost(sort: { fields: date, order: DESC }, limit: 3) {
      edges {
        node {
          id
          title
          excerpt
          slug
          link
          date(formatString: "DD.MM.YY")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fixed(width: 300) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export default RecentPosts
