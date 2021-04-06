import React from "react"
import styled from "styled-components"

const Burger = ({ isOpen, ...props }) => {
  if (isOpen)
    return (
      <ButtonWrapper aria-label="close menu" {...props}>
        <CloseIcon key="close" />
      </ButtonWrapper>
    )

  return (
    <ButtonWrapper aria-label="open menu" {...props}>
      <MenuIcon key="open" />
    </ButtonWrapper>
  )
}

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="4" y1="16" x2="20" y2="16" />
  </svg>
)
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <line x1="0" y1="0" x2="16" y2="16" />
    <line x1="16" y1="0" x2="0" y2="16" />
  </svg>
)

const ButtonWrapper = styled.button`
  cursor: pointer;
  display: block;
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;

  &:hover {
    color: grey;
    transition: color 0.2s ease-in-out;
  }
`

export default Burger
