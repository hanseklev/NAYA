import _ from "lodash"
import React from "react"
import styled from "styled-components"
import { StyledLink } from "../_shared/styles"

const Categories = ({ categories, active, title = "Kategorier" }) => {
  return (
    <CategoryContainer>
      <StyledLink to={`/journal`} key="all" mr="1rem"  underline={true}>
        ALLE
      </StyledLink>
      {categories
        .filter(c => !c.name.toLowerCase().includes("uncat"))
        .filter(c => !c.name.includes("Journal"))
        .map(category => {
          const url = _.kebabCase(category.name)
          return (
            <StyledLink
              to={`/categories/${url}`}
              key={category.name}
              style={{ textTransform: "uppercase" }}
              underline
              mr="1rem"
            >
              {category.name}
            </StyledLink>
          )
        })}
    </CategoryContainer>
  )
}

const CategoryContainer = styled.nav`
  margin: 0 auto;
  padding-top: 1.5rem;
  width: 100%;
  text-align: center;
`

export default Categories
