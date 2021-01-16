import React from "react"
import MainLayout from "../components/layouts/main"
import AboutSection from "../components/Section/aboutSection"
import SEO from "../components/seo"
import Sidebar from "../components/Sidebar/sidebar"
import { ABOUT, OUR_STORY, WHY_NAYA } from "../content/content"

const AboutPage = props => {
  const links = ["People", "Production", "Yoyknameit"]
  return (
    <MainLayout>
      <SEO title="Home" />
      <Sidebar elements={links} />
      <AboutSection text={OUR_STORY} title="our story"  textOnRight={true}/>
      <AboutSection text={WHY_NAYA} title="NAYA = नया = NY" textOnRight={true} />
      <AboutSection text={ABOUT} title="About us" textOnRight={true} />

    </MainLayout>
  )
}

export default AboutPage
