import React from "react"
import MainLayout from "../components/layout"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Denne siden finnes dessverre ikke... :'(.</p>
  </MainLayout>
)

export default NotFoundPage
