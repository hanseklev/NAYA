import React from "react"
import styled, { keyframes } from "styled-components"

export const Loader = () => <Wrap></Wrap>

const rotate = keyframes`
 0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

const Wrap = styled.div`
  border: 16px solid var(--color-text);
  border-top: 16px solid var(--color-primary-light);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${rotate} 2s linear infinite;
  margin: 0 auto;
`
