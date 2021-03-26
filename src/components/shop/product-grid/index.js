import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import ProductPreview from "../product-preview/index"

const ShopList = ({ products }) => {
  return (
    <ShopListGrid>
      {products &&
        products.map(p => {
          const mainImg =
            p.node.featuredImage && p.node.featuredImage.node.localFile
          const secondaryImg =
            p.node.customProduct.secondaryimage &&
            p.node.customProduct.secondaryimage.localFile

          const slug = `/product/${p.node.id}`
          return (
            <motion.li positionTransition key={p.node.id}>
              <ProductPreview
                isProduct
                hasAnimate
                {...p}
                mainImg={mainImg}
                secondaryImg={secondaryImg}
                slug={slug}
              />
            </motion.li>
          )
        })}
    </ShopListGrid>
  )
}

const ShopListGrid = styled.ul`
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 46px;
  justify-items: center;
  list-style-type: none;
  margin: 0 auto;

  @media screen and (min-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }
`

export default ShopList
