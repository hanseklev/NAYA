import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'



export const StyledLink = styled(props => <Link {...props} />)`
  color: var(--color-text);
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: 0.6s color cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:not(:last-child){
  margin-right: 0.5rem;
}
  }

  &:hover {
    color: grey;
  }
`