import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import React from "react"
import MainLayout from "../components/layout"
import SEO from "../components/seo"
import { ContentContainer } from "../components/_shared/styles"

const ContactPage = props => {
  const {
    wpPage: {  title, content },
  } = useStaticQuery(query)



  return (
    <MainLayout>
      <SEO title="Kontakt" />
      
{/*       <SplitSection left={} right={}/>
 */}      <ContentContainer center> {title && <h1>{title}</h1>}
 {content && parse(content)}</ContentContainer>
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
