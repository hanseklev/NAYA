import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import React from "react"
import Hero from "../components/hero"
import MainLayout from "../components/layout/"
import AboutSection from "../components/section/about-section"
import SEO from "../components/seo"
import { ContentContainer } from "../components/_shared/styles"

const AboutPage = props => {
  const {
    wpPage: { title, content, aboutsection, hero, defaultsection },
  } = useStaticQuery(query)
  const heroImage = hero.heroimagedesktop && hero.heroimagedesktop.localFile

  return (
    <MainLayout>
      <SEO title={title} />
      <Hero
        desktopImage={heroImage}
        hasText
        title={title}
        textAlign="left"
        ml="5rem"
      />
      <AboutSection
        title={aboutsection.abouttitle}
        description={aboutsection.aboutdescription}
        image={aboutsection.aboutimage.localFile}
        color
      />
      <AboutSection
        title={defaultsection.sectiontitle}
        description={defaultsection.sectiondescription}
        image={defaultsection.sectionimage.localFile}
        flipped
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
      aboutsection {
        abouttitle
        aboutdescription
        aboutimage {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      defaultsection {
        sectiontitle
        sectiondescription
        sectionimage {
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
