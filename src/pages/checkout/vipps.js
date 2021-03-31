import React from "react"
import MainLayout from "../../components/layout"
import SEO from "../../components/seo"

const CheckoutPage = () => {
  const title = "Orde fullført"

  
  const token = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : ''

  return (
    <MainLayout hideFooter>
      <SEO title={title} />
      <h1>Ordre fullført</h1>
      <p>Token: {token}</p>
      <p style={{textAlign: 'center', marginTop:'100px'}}>Din ordre "nr" på kr "250" er plassert. Du vil motta en epost innen kort tid med bekreftelse.</p>

    </MainLayout>
  )
}

export default CheckoutPage
