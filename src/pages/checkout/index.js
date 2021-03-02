import React from "react"
import CheckoutContainer from "../../components/Checkout/checkout-container"
import MainLayout from "../../components/layout"
import SEO from "../../components/seo"

const CheckoutPage = () => {
  const title = "Kassen"
  return (
    <MainLayout hideFooter>
      <SEO title={title} />
        <CheckoutContainer />
    </MainLayout>
  )
}

export default CheckoutPage
