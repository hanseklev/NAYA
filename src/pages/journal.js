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
  const { title, hero } = data.journalPage


  return (
    <MainLayout>
      <SEO title={title} />
      {hero && <Hero desktopImage={hero.heroimagedesktop.localFile} title={title} hasText /> }
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
    journalPage: wpPage(id: { eq: "cG9zdDozMzA0" }) {
      title
      hero {
        herotitle
        heroimagedesktop {
          localFile {
            childImageSharp{
              fluid(maxWidth: 1920){
                ...GatsbyImageSharpFluid
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
