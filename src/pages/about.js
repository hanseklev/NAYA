import { useStaticQuery, graphql } from "gatsby"
import parse from 'html-react-parser'
import React from "react"
import Hero from "../components/hero"
import MainLayout from "../components/layout/"
import SEO from "../components/seo"
import { ContentContainer } from "../components/_shared/container"

const AboutPage = props => {
  //const links = ["People", "Production", "Yoyknameit"]

  const {
    wpPage: { title, content, hero },
  } = useStaticQuery(query)

  console.log(title);
  console.log(content);
  console.log(hero);


  const heroImage = hero.heroimagedesktop &&
  hero.heroimagedesktop.localFile

  //const teamImage = data.teamet.childImageSharp.fluid
  // <Sidebar elements={links} />

  return (
    <MainLayout>
      <SEO title={title} />
      <Hero desktopImage={heroImage} hasText title={title}/>
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
    }
  }
`
