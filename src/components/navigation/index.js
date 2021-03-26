import React, { useState } from "react"
import styled from "styled-components"
import ModalContainer from "../_shared/modal-container"
import { StyledLink } from "../_shared/styles"
import Burger from "./burgericons"

export const NavigationDesktop = ({ hide, location }) => {
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    setShow(!show)
  }

  return (
    <>
      {!show && (
        <DesktopNavigation>
          <div className="desktop_link_container">
          <StyledLink className="desktop_link" to="/">
              Home
            </StyledLink>
            <StyledLink className="desktop_link" to="/shop">
              Shop
            </StyledLink>
            <StyledLink className="desktop_link" to="/journal">
              Journal
            </StyledLink>
            <StyledLink className="desktop_link last" to="/about">
              About
            </StyledLink>
          </div>

          <Burger isOpen={false} onClick={toggleMenu} className="icon" />
        </DesktopNavigation>
      )}
      <MobileNavigation>
        <ModalContainer isOpen={show} slideLeft={true}>
          <Burger isOpen={true} onClick={toggleMenu} className="close_icon" />
          <div className="mobile_link_wrap">
            <StyledLink to="/" onClick={toggleMenu} className="mobile_link">
              home
            </StyledLink>
            <StyledLink to="/shop" onClick={toggleMenu} className="mobile_link">
              shop
            </StyledLink>
            <StyledLink
              to="/journal"
              onClick={toggleMenu}
              className="mobile_link"
            >
              Journal
            </StyledLink>
            <StyledLink
              to="/about"
              onClick={toggleMenu}
              className="mobile_link"
            >
              about
            </StyledLink>
          </div>
        </ModalContainer>
      </MobileNavigation>
    </>
  )
}

const DesktopNavigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;

  .desktop_link {
    margin-right: 1rem;
  }

  .last {
    margin-right: 0;
  }

  .desktop_link_container {
    display: none;
    text-transform: uppercase;
    margin-left: 1rem;
  }

  .icon {
    cursor: pointer;
    display: block;
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
  }

  @media (min-width: 769px) {
    .desktop_link_container {
      display: block;
    }

    .icon {
      display: none;
    }
  }
`

const MobileNavigation = styled.nav`
  .close_icon {
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 25px;
    margin-left: 25px;
    z-index: 3;
  }

  .mobile_link_wrap {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
  }

  .mobile_link {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #655a46;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }
`
