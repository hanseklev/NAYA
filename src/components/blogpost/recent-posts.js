import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Paragraph from "../_shared/text"
import BlogPostPreviewGrid from "./blogpost-preview-grid"

const RecentPosts = () => {
  const data = useStaticQuery(query)

  const postEdges = data && data.postsPreview && data.postsPreview.edges

  return (
    <section>
      <h2 style={{fontSize:'2.5rem'}}>Journal</h2>
      <Paragraph style={{textAlign:'center'}}>
        Sjekk ut de nyeste innleggene våre eller trykk{" "}
        <Link to="/journal">HER</Link> for å komme til arkivet{" "}
      </Paragraph>
      <BlogPostPreviewGrid edges={postEdges} />
    </section>
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
                  fixed(width: 300){
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
