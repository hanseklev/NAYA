import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import React from "react"
import MainLayout from "../components/layout/"
import IntroSection from "../components/section/intro"
import SEO from "../components/seo"
import { ContentContainer } from "../components/_shared/styles"

const AboutPage = props => {
  const {
    wpPage: { title, content, introsection }
  } = useStaticQuery(query)

  //const heroImage = hero.heroimagedesktop && hero.heroimagedesktop.localFile
  // <Sidebar elements={links} />

  return (
    <MainLayout>
      <SEO title={title} />
      {/*   <Hero desktopImage={heroImage} hasText title={title} /> */}
      <IntroSection
        title={introsection.introtitle}
        description={introsection.introdescription}
        image={introsection.introImage.localFile}
      />
      <ContentContainer>{content && parse(content)}</ContentContainer>
    </MainLayout>
  )
}

export default AboutPage

const query = graphql`
  {
    wpPage(title: { eq: "About" }) {
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
        introImage {
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
