import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import React from "react"
import Hero from "../components/hero"
import MainLayout from "../components/layout/"
import IntroSection from "../components/section/intro"
import SEO from "../components/seo"
import { ContentContainer } from "../components/_shared/styles"

const AboutPage = props => {
  const {
    wpPage: { title, content, introsection, hero }
  } = useStaticQuery(query)
  console.log(introsection, title, content);
  const heroImage = hero.heroimagedesktop && hero.heroimagedesktop.localFile
  // <Sidebar elements={links} />

  return (
    <MainLayout>
      <SEO title={title} />
        <Hero desktopImage={heroImage} hasText title={title} />
      <IntroSection
        title={introsection.introtitle}
        description={introsection.introdescription}
        image={introsection.introimage.localFile}
      />
      <ContentContainer>{content && parse(content)}</ContentContainer>
    </MainLayout>
  )
}

export default AboutPage

const query = graphql`
  {
    wpPage(id: { eq: "cG9zdDo1MTI=" }) {
      title
      content
      hero {
        heroimagedesktop {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
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
    }
  }
`
