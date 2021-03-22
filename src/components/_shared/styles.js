import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"

export const Article = styled.article`
  display: flex row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const TextBox = styled.div`
  background-color: var(--bg-secondary);
  color: var(--color-text);
  z-index: 2;
  position: relative;
  padding: 2rem 0;
  margin: 0;
  top: 0;

  @media (min-width: 769px) {
    ${"" /* top: -2rem; */}
    grid-column: 2 / span 3;
    grid-row: 3 / span 2;
    padding: 1.5rem 3rem;
    margin-right: 2rem;
  }
`
export const ContentContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  letter-spacing: 0.04rem;
  line-height: 1.8;
  text-align: left;
  color: var(--color-text);

  ${props => props.center && "text-align: center;"}

  .wp-block-image, .wp-image {
    padding: 1rem 0;
    width: 100%;
    text-align: center;
  }

  figure {
    padding: 0;
  }


  p,
  ul  {
    padding: 1rem 1rem;
  }

  @media (min-width: 769px) {
    max-width: 730px;
  }
`

export const Paragraph = styled.p`
  line-height: 1.6rem;
  letter-spacing: 0.04rem;
  margin: 0;
  padding: 1rem;
  text-align: ${props => (props.center ? "center" : "left")};
  color: var(--color-text);
 ${'' /*  background-color: ${props =>
    props.dark ? "var(--bg-secondary)" : "inherit"}; */}
`

export const StyledLink = styled(props => <Link {...props} />)`
  color: var(--color-text);
  font-size: 16px;
  font-weight: ${props => props.weight || 400};
  text-decoration: none;
  transition: 0.6s color cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:not(:last-child){
  margin-right: 0.5rem;
}
  }

  &:hover {
    color: black;
  }
`

export const Section = styled.section`
  padding: 2rem 0;
  color: var(--color-text);
  background-color: ${props =>
    props.dark ? "var(--bg-secondary)" : "inherit"};
`

export const ProductContainer = styled.article`
  max-width: 980px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  & h1 {
    text-align: left;
  }

  .price {
    font-size: 28px;
  }

  .info {
    flex: 1;
    justify-content: center;
  }

  .description {
    margin-top: 40px;
  }

  @media (min-width: 500px) {
    flex-direction: row;

    .info {
      margin-left: 1rem;
    }
  }
`