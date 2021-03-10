import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Hero from "../components/hero"
import MainLayout from "../components/layout"
import SEO from "../components/seo"
import parse from "html-react-parser"
import { ContentContainer } from "../components/_shared/styles"

const ContactPage = props => {
  const {
    wpPage: { title, content, hero },
  } = useStaticQuery(query)

  return (
    <MainLayout>
      <SEO title={title} />
      {hero && (
        <Hero
          desktopImage={hero.heroimagedesktop.localFile}
          title={title}
          hasText
        />
      )}
      <ContentContainer center>{content && parse(content)}</ContentContainer>
    </MainLayout>
  )
}

export default ContactPage

const query = graphql`
  {
    wpPage(title: { eq: "Kontakt" }) {
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
    }
  }
`
