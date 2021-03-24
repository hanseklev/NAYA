import { graphql } from "gatsby"
import React from "react"
import BlogPostPreviewGrid from "../components/blogpost/blogpost-preview-grid"
import Categories from "../components/categories"
import Hero from "../components/hero"
import MainLayout from "../components/layout"
import SEO from "../components/seo"

const CategoryTemplate = props => {
  const {
    data,
    pageContext: { category },
  } = props

  const postEdges = data && data.allWpPost && data.allWpPost.edges
  const featuredImage = data.journalPage.hero.heroimagedesktop.localFile

  return (
    <MainLayout>
      <SEO title={category} />
      <Hero desktopImage={featuredImage} hasText title={category} />
      <Categories title="Kategorier" categories={data.categories.nodes} active={category} />
      <BlogPostPreviewGrid edges={postEdges} />
    </MainLayout>
  )
}

export default CategoryTemplate

export const pageQuery = graphql`
  query($category: String!) {
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: $category } } } }
      }
    ) {
      edges {
        node {
          id
          title
          date
          excerpt
          slug
          link
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
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
    allWpPage {
      edges {
        node {
          uri
          title
        }
      }
    }
    categories: allWpCategory {
      nodes {
        name
      }
    }
    journalPage: wpPage(title: { eq: "Journal" }) {
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
  }
`
