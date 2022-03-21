import React from "react"
import MainLayout from "../components/layout"
import HomePageRedirect from "../components/redirect"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="404: Not found" />
    <p>Page not found</p>
    <HomePageRedirect/>
  </MainLayout>
)

export default NotFoundPage
