import React from "react"

const Burger = ({ isOpen }) => {
  if (isOpen) return <CloseButton key="close" />

  return <BurgerButton key="open" />
}

export const BurgerButton = () => (
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
export const CloseButton = () => (
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

export default Burger
