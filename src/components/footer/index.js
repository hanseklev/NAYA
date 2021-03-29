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
        <div style={{ flex: 1 }}>
          <FooterTitle>Privacy</FooterTitle>
          <Link className="menu_link" to="/general-terms">
            General Terms
          </Link>
          <Link className="menu_link" to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
        <div style={{ flex: 3 }}>
          <FooterTitle>Information</FooterTitle>
          <Link className="menu_link" to="/about">
            About
          </Link>
          <Link className="menu_link" to="/contact">
            Contact
          </Link>
        </div>
        <div style={{ marginLeft: "-5px" }} className="socials">
          <Logo />
          <div style={{ marginBottom: "5px" }}>FØLG OSS</div>
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
    padding: 24px 24px 24px 36px;
  }
`

const FooterTitle = styled.h3`
  font-size: 1rem;
  text-align: left;
  margin: 0.5rem 0;
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  line-height: 1.6;

  .socials {
    text-align: left;
  }
  .menu_link {
    display: block;
    padding: 4px 0;
  }

  div {
    margin-bottom: 5px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 2rem;

    .socials {
      text-align: right;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: black;
    }
  }
`

export default Footer
