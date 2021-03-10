import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import MainLayout from "../components/layout"
import SEO from "../components/seo"
import parse from "html-react-parser"
import { ContentContainer } from "../components/_shared/styles"

const GeneralTermsPage = () => {
  const data = useStaticQuery(GeneralTerms)
  const { title, content } = data.wpPage

  return (
    <MainLayout>
      <SEO title={title} />
        <ContentContainer>
          <h1>{title}</h1>
          {content && parse(content)}
        </ContentContainer>
    </MainLayout>
  )
}

export const GeneralTerms = graphql`
  query GeneralTermsPage {
    wpPage(id: { eq: "cG9zdDozMzAy" }) {
      title
      content
    }
  }
`

export default GeneralTermsPage
