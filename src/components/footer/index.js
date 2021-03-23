import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import SocialIcons from "../social-icons"
import Logo from "../logo"

const Footer = ({ isHidden }) => {
  if (isHidden) return null
  return (
    <FooterContainer>
      <FooterSection>
        <div style={{ marginLeft: "-5px", marginBottom: "1rem" }}>
          <Logo />
        </div>

        <div>
          <FooterTitle>Privacy</FooterTitle>
          <Link className="menu_link" to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="menu_link" to="/general-terms">
            General Terms
          </Link>
        </div>
        <div>
          <FooterTitle>Information</FooterTitle>
          <Link className="menu_link" to="/about">
            About
          </Link>
          <Link className="menu_link" to="/contact">
            Contact
          </Link>
        </div>
        <div style={{ marginRight: "2rem" }}>
          <p>Follow us on social media!</p>
          <SocialIcons size="30" />
        </div>
      </FooterSection>

      {/*   <FooterBottom>
        NAYA AS • ORG.NR: 924 634 928 <br />
      </FooterBottom> */}
    </FooterContainer>
  )
}
//       <a href="mailto:HELLO@NAYA.NO">HELLO@NAYA.NO</a>
//    ALL RIGHTS RESERVED <br />© 2021
const FooterContainer = styled.footer`
  background-color: rgb(228, 222, 209);
  z-index: 100;
  padding: 1rem 1rem;
  color: var(--color-text);

  @media (min-width: 768px) {
    padding: 54px 24px 24px 36px;
  }
`

const FooterTitle = styled.h3`
  font-size: 18px;
  text-align: left;
  margin: 0.5rem 0;
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  line-height: 1.6;  

  .menu_link {
    display: block;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 1rem;
  }
`

export default Footer
