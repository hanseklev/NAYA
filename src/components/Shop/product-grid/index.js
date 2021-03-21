import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import ProductPreview from "../product-preview"

const ShopList = ({ products }) => {
  return (
    <ShopListContainer>
      {products &&
        products.map(p => {
          return (
            <motion.li positionTransition key={p.node.id}>
              <ProductPreview {...p} />
            </motion.li>
          )
        })}
    </ShopListContainer>
  )
}

const ShopListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 46px;
  justify-items: center;
  list-style-type: none;
  margin: 0 auto;

  @media screen and (min-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default ShopList
