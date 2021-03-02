import styled from "styled-components"

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  letter-spacing: 0.04rem;
  line-height: 1.6;
  text-align:left;

  ${props => props.center && "text-align: center;"}

  .wp-block-image {
    padding-top: 1rem;
  }

  &: figure {
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  }

  p, ul {
    padding: 1rem 1rem;
  }

  @media (min-width: 769px) {
    max-width: 730px;
  }
`
