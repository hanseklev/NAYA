import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import MainLayout from "../components/layout/"
import parse from "html-react-parser"
import { ContentContainer } from "../components/_shared/container"

const PrivacyPolicyPage = () => {
  const data = useStaticQuery(PrivacyPolicyQuery)

  const { title, content } = data.wpPage

  return (
    <MainLayout>
      <ContentContainer>
        <h1>{title}</h1>
        {content && parse(content)}
      </ContentContainer>
    </MainLayout>
  )
}

export const PrivacyPolicyQuery = graphql`
  query PrivacyPolicy {
    wpPage(id: { eq: "cG9zdDo1Mzg=" }) {
      title
      content
    }
  }
`

export default PrivacyPolicyPage
