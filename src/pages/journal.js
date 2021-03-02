import { graphql } from "gatsby"
import React from "react"
import BlogPostPreviewGrid from "../components/blogpost/blogpost-preview-grid"
import Categories from "../components/categories"
import Hero from "../components/hero"
import MainLayout from "../components/layout"
import SEO from "../components/seo"

export default function Journal(props) {
  const { data, errors } = props

  if (errors) return <MainLayout>{errors}</MainLayout>

  const postEdges = data && data.postsPreview && data.postsPreview.edges
  const { nodes: categoryNodes } = data.categories
  const { title, featuredImage } = data.journalPage

  return (
    <MainLayout>
      <SEO title={title} />
      <Hero desktopImage={featuredImage.node.localFile} title={title} hasText />
      <Categories categories={categoryNodes} />
      <BlogPostPreviewGrid edges={postEdges} />
    </MainLayout>
  )
}

export const JournalPageQuery = graphql`
  query MyQuery {
    postsPreview: allWpPost(sort: { fields: date, order: DESC }) {
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
    journalPage: wpPage(title: { eq: "Journal" }) {
      title
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    categories: allWpCategory(filter: { id: { ne: "dGVybTox" } }) {
      nodes {
        name
      }
    }
  }
`
