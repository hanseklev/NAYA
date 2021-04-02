import { navigate } from "gatsby"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import { ShopContext } from "../../../context/shop-context"
import { getUpdatedItems } from "../../../lib/cart-utils"

export const CartItem = ({ item, products, updateCart, addQtyToCart }) => {
  const [itemCount, setItemCount] = useState(item.qty)
  const { setOpenCart } = useContext(ShopContext)

  function handleQtyChange(event, type, removeItem = false) {
    let newCount
    event.stopPropagation()

    if (type === "DECREMENT" && itemCount === 1) return

    newCount = removeItem
      ? 0
      : type === "INCREMENT"
      ? addQtyToCart({
          variables: {
            input: { clientMutationId: v4(), productId: item.productId },
          },
        }) //itemCount + 1
      : itemCount - 1

    setItemCount(newCount)

    const updatedItems = getUpdatedItems(products, newCount, item.cartKey)

    updateCart({
      variables: {
        input: {
          clientMutationId: v4(),
          items: updatedItems,
        },
      },
    })
  }

  function handleGoToProduct() {
    navigate(`/product/${item.id}`)
    setOpenCart(false)
  }

  return (
    <ItemContainer>
      <ItemSection>
        <ItemImage>
          <img
            srcSet={item.image?.srcSet}
            sizes="(max-width: 1900px)"
            alt={item.name}
            style={{ width: "80px", height: "110px" }}
          />
        </ItemImage>
      </ItemSection>
      <ItemSection large>
        <TitleLink onClick={() => handleGoToProduct()}>{item.name}</TitleLink>
        <div> {item.price} kr</div>

        <div>
          <RemoveButton onClick={event => handleQtyChange(event, "", true)}>
            Fjern
          </RemoveButton>
        </div>
      </ItemSection>

      <ItemSection>
        <QuantityButton onClick={event => handleQtyChange(event, "INCREMENT")}>
          +
        </QuantityButton>
        <span style={{ margin: "0 auto" }}>{item.qty}</span>
        <QuantityButton onClick={event => handleQtyChange(event, "DECREMENT")}>
          -
        </QuantityButton>
      </ItemSection>
    </ItemContainer>
  )
}

const ItemContainer = styled.li`
  display: flex;
  background-color: var(--bg-primary);
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  box-shadow: 0 8px 24px rgba(231, 235, 237, 0.6);
`

const ItemSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 1em;
  ${props => props.large && "flex: 1;"}
`

const ItemImage = styled.figure`
  margin: 0;
  padding: 0;
  max-width: 80px;
  height: 100%;
`

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  color: #655a46;
  font-weight: 600;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: black;
  }
`
const QuantityButton = styled.button`
  ${"" /* border: solid 0.5px var(--color-text);
  border-radius: 50%;

 */} background-color: inherit;
  font-size: 16px;
  cursor: pointer;
`

const TitleLink = styled.button`
  margin: 0;
  padding: 0 0 5px;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  color: #655a46;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: black;
  }
`
