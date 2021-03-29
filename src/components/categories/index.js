import React from "react"
import styled from "styled-components"
import { getCategoryUrl } from "../../lib/helpers"
import { StyledLink } from "../_shared/styles"

const Categories = ({ categories, active, title = "Kategorier" }) => {
  return (
    <CategoryContainer>
      <StyledLink to={`/journal`} key="all" mr="1rem"  underline="true">
        ALLE
      </StyledLink>
      {categories
        .filter(c => !c.name.toLowerCase().includes("uncat"))
        .filter(c => !c.name.includes("Journal"))
        .map(category => {
          return (
            <StyledLink
              to={getCategoryUrl(category.name)}
              key={category.name}
              style={{ textTransform: "uppercase" }}
              underline="true"
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
