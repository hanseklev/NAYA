import _ from "lodash"
import React from "react"
import styled from "styled-components"
import { StyledLink } from "../_shared/link"


const Categories = ({ categories, active, title='Kategorier' }) => {
  return (
    <CategoryContainer>
      <h2 style={{fontSize:'1rem'}}>{title}</h2>
      <StyledLink to={`/journal`} key="all">
        Alle
      </StyledLink>
      {categories
        .filter(c => !c.name.toLowerCase().includes("uncat"))
        .filter(c => !c.name.includes("Journal"))
        .map(category => {
          const url = _.kebabCase(category.name)
          return (
            <StyledLink to={`/categories/${url}`} key={category.name}>
              {category.name}
            </StyledLink>
          )
        })}
    </CategoryContainer>
  )
}

const CategoryContainer = styled.nav`
  margin: 0 auto;
  width: 100%;
  text-align: center;
`


export default Categories
