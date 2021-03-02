import styled from "styled-components"

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
  padding: 0;
  margin:0;
  top: 0;

  @media (min-width: 769px) {
    top: -2rem;
    grid-column: 2 / span 3;
    grid-row: 3 / span 2;
    padding-left: 5rem;
    padding-right: 5rem;
    margin-right: 2rem;
  }
`
