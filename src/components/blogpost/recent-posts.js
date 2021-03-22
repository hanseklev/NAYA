import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Paragraph, Section, StyledLink } from "../_shared/styles"
import BlogPostPreviewGrid from "./blogpost-preview-grid"

const RecentPosts = ({ dark }) => {
  const data = useStaticQuery(query)

  const postEdges = data && data.postsPreview && data.postsPreview.edges

  return (
    <div>
      <Section dark={dark}>
        <h2 style={{ fontSize: "2.5rem"}}>Journal</h2>
        <Paragraph style={{ textAlign: "center" }}>
          Sjekk ut de nyeste innleggene våre eller trykk{" "}
          <StyledLink to="/journal">HER</StyledLink> for å komme til arkivet{" "}
        </Paragraph>
      </Section>
      <BlogPostPreviewGrid edges={postEdges} />
    </div>
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
