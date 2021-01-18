import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"
import MainLayout from "../components/layouts/main"
import AboutSection from "../components/Section/aboutSection"
import Section from "../components/Section/section"
import SEO from "../components/seo"
import Sidebar from "../components/Sidebar/sidebar"
import { ABOUT, OUR_STORY, TEAMET, WHY_NAYA } from "../content/content"

const AboutPage = props => {
  const links = ["People", "Production", "Yoyknameit"]

  const data = useStaticQuery(query)
  console.log(data)

  const image = data.about.childImageSharp.fluid
  const teamImage = data.teamet.childImageSharp.fluid

  return (
    <MainLayout>
      <SEO title="About" />
      <Section>
        <h1>About</h1>
      </Section>
      <Sidebar elements={links} />
      <AboutSection text={OUR_STORY} title="our story" textOnRight={true} />
      <Section>
        <GatsbyImage
          style={{ width: "100%", padding: "0 1rem" }}
          fluid={image}
        />
      </Section>
      <AboutSection
        text={WHY_NAYA}
        title="NAYA = नया = NY"
        textOnRight={true}
      />
      <AboutSection text={ABOUT} title="About us" textOnRight={true} />

      <Section>
        <GatsbyImage
          style={{ width: "100%", padding: "0 1rem" }}
          fluid={teamImage}
        />
      </Section>
      <AboutSection text={TEAMET} title="NAYA-teamet" />
    </MainLayout>
  )
}

export default AboutPage

const query = graphql`
  {
    about: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    teamet: file(relativePath: { eq: "naya-teamet.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
