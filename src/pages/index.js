import { graphql } from "gatsby"
import React from "react"
import Hero from "../components/hero"
import MainLayout from "../components/layouts/main-layout"
import Section from "../components/section"
import SEO from "../components/seo"
import { WHY_NAYA } from "../content/content"

const IndexPage = props => {
  const {data} = props
  return (
    <MainLayout>
      <SEO title="Home" />
      <Hero hasText={true} title={`MAKE FAIR TRADE THE ONLY TRADE`} />
      <Section text={WHY_NAYA} title="Why Naya" image={data.file.childImageSharp.fixed} />
      <Section text={WHY_NAYA} title="Why Naya" />
    </MainLayout>
  )
}

export default IndexPage

export const query = graphql`
query IndexQuery {
  file(relativePath: {eq: "why-naya.jpg"}) {
    childImageSharp {
      fixed(width: 400){
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`
