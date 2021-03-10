import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import SocialIcons from "../social-icons"

const Footer = ({isHidden}) => {
  if (isHidden) return null
  return (
    <FooterContainer>
    <h2 style={{textAlign:'left'}}>NAYA</h2>
      <FooterSection>
        <FooterTitle>Privacy</FooterTitle>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/general-terms">General Terms</Link>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Information</FooterTitle>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </FooterSection>
      <FooterSection>
        <SocialIcons size="30" />
      </FooterSection>
      <hr />
      <FooterBottom>
        NAYA AS •. ORG.NR: 924 634 928 <br/>
      </FooterBottom>
    </FooterContainer>
  )
}
//       <a href="mailto:HELLO@NAYA.NO">HELLO@NAYA.NO</a>
//    ALL RIGHTS RESERVED <br />© 2021
const FooterContainer = styled.footer`
  background-color: rgb(228, 222, 209);
  z-index: 100;
  padding: 0.5rem 1rem;
`

const FooterTitle = styled.h3`
  color: var(--color-text);
  font-size: 18px;
  text-align: left;
  margin: 0.5rem 0;
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  > a {
    text-decoration: none;
    color: inherit;
    font-size: 1rem;

  }
`

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  line-height: 1.5;

  > a {
    text-decoration: none;
    color: inherit;
  }

`

export default Footer

/*   display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  .bottomFooter ul {
  display: flex column;
  align-items: center;
  padding: 0;
  list-style-type: none;
  font-size: 12px;
}

.bottomFooter ul li {
  width: 100%;
  padding: 2px 0;
  text-align: center;
}

  
  
  */
