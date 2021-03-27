import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Footer from "../footer"
import Header from "../header/header"
import "../../styles/wp-styles.css"

const MainLayout = ({ hideFooter, children }) => {
  return (
    <>
      <Header />
      <Layout>{children}</Layout>
      <Footer isHidden={hideFooter} /> 
    </>
  )
}

const Layout = styled.main`
  padding: 0;
  margin: 0 auto;
  margin-bottom: 100px;
  background: #fbfaf7;
  width:100%;

  @media (min-width: 769px) {
    max-width: 1980px;
  }
`

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout


/*

 position: relative;
  min-height: 400px;

  */