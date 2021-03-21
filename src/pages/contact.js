import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Hero from "../components/hero"
import MainLayout from "../components/layout"
import SEO from "../components/seo"
import parse from "html-react-parser"
import { ContentContainer } from "../components/_shared/styles"

const ContactPage = props => {
  const {
    wpPage: {  content },
  } = useStaticQuery(query)

  return (
    <MainLayout>
      <SEO title="Kontakt" />
      <ContentContainer center>{content && parse(content)}</ContentContainer>
    </MainLayout>
  )
}

export default ContactPage

const query = graphql`
  {
    wpPage(id: { eq: "cG9zdDo1Mjc=" }) {
      title
      content
    }
  }
`
