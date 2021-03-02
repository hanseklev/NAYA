import React, { useRef, useState } from "react"
import styled from "styled-components"

export default ({
  label,
  onChange,
  value = "",
  type = "text",
  isDouble = false,
  ...props
}) => {
  const inputRef = useRef()
  const [isFocus, setIsFocus] = useState(false)

  const handleChange = event => {
    onChange(event.target.value)
  }

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  return (
    <Label double={isDouble}>
      <Input
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        type={type || "text"}
        ref={inputRef}
        {...props}
      />
      <LabelText isFocused={value === "" && !isFocus}>{label || ""}</LabelText>
    </Label>
  )
}

const Label = styled.label`
  display: ${props => (props.double ? 'inline-block' :'block')};
  width: ${props => (props.double ? "50%" : "100%")};
  position: relative;
  border: solid 0.5px var(--color-text);
  border-radius: 1px;
  font-size: 1.35rem;
  line-height: 1.3;
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  font-size: 1.1rem;
  font-family: var(--font-text);
  font-weight: 300;

  line-height: 1.3;
  width: 100%;
  padding: 1.55rem 0.8rem 0.55rem;
  border-radius: 4px;
  border: 2px solid var(--color-highlighted);
  background-color: transparent;
  transition: border-color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`

const LabelText = styled.span`
  will-change: transform;
  transform: translate(-0.02rem, 0.82rem) scale(1.5625);

  font-size: 14px;
  font-family: var(--font-text);
  font-weight: 300;
  position: absolute;
  top: 0.6rem;
  left: 0.9rem;
  display: block;
  margin: 0;
  transform-origin: left center;
  color: var(--color-muted);
  transition: transform 0.4s; // cubic-bezier(0.86, 0, 0.4, 1)
  will-change: transform;
  transform: translate(-0.02rem, 0.82rem) scale(1.5625);

  ${props => !props.isFocused && "transform: none"}
`
