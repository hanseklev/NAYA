import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Hero from "../components/hero"
import MainLayout from "../components/layout"
import IntroSection from "../components/section/intro"
import SEO from "../components/seo"
import ProductCarousel from "../components/shop/carousel"
import RecentPosts from "../components/blogpost/recent-posts"

const IndexPage = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { hero, introsection, productShowcase: showcase } = data.wpPage
        console.log(hero)
        return (
          <MainLayout>
            <SEO title="NAYA" />
             <Hero
              hasText={true}
              desktopImage={hero.heroimagedesktop.localFile}
              mobileImage={hero.heroimagemobile.localFile}
              title={hero.herotitle}
              fullHeight
            />
<<<<<<< HEAD
             <IntroSection
=======
            {/*   <IntroSection
>>>>>>> init commit
              title={introsection.introtitle}
              description={introsection.introdescription}
              image={introsection.introimage.localFile}
              haslink
            />
            <ProductCarousel
              title={showcase.ptitle}
              description={showcase.pdescription}
              items={showcase.products}
            />
<<<<<<< HEAD
            <RecentPosts dark />
=======
           <ProductCarousel title={showcase.ptitle} description={showcase.pdescription} items={showcase.products}/>
            <RecentPosts /> */}
>>>>>>> init commit
          </MainLayout>
        )
      }}
    />
  )
}

export default IndexPage

const query = graphql`
  query IndexQuery {
    wpPage(id: { eq: "cG9zdDozMzM5" }) {
      title
      hero {
        herotitle
        heroimagemobile {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        heroimagedesktop {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      introsection {
        introtitle
        introdescription
        introimage {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      productShowcase {
        pdescription
        ptitle
        products {
          ... on WpMediaItem {
            id
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
