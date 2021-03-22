import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import { getUpdatedCartItems } from "../../../lib/utils"

export const CartItem = ({ item, products, updateCart }) => {
  const [itemCount, setItemCount] = useState(item.quantity)
  const clientMutationId = v4()

  function handleQtyChange(event, type, removeItem = false) {
    let newCount
    event.stopPropagation()

    if (type === "DECREMENT" && itemCount === 1) return

    newCount = removeItem
      ? 0
      : type === "INCREMENT"
      ? itemCount + 1
      : itemCount - 1

    setItemCount(newCount)

    const updatedItems = getUpdatedCartItems(products, newCount, item.cartKey)

    updateCart({
      variables: {
        input: {
          clientMutationId: clientMutationId,
          items: updatedItems,
        },
      },
    })
  }

  return (
    <ItemContainer>
      <ItemSection>
        <ItemImage>
          <img
            src={item.image.sourceUrl}
            alt={item.image.altText}
            style={{ width: "100%" }}
          />
        </ItemImage>
      </ItemSection>
      <ItemSection large>
        <Title to={`/product/${item.slug}`}>{item.name}</Title>
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
        <span style={{ margin: "0 auto" }}>{item.quantity}</span>
        <QuantityButton onClick={event => handleQtyChange(event, "DECREMENT")}>
          -
        </QuantityButton>
      </ItemSection>
    </ItemContainer>
  )
}

const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  max-width: 100px;
`

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  color: #655a46;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
`
const QuantityButton = styled.button`
  ${"" /* border: solid 0.5px var(--color-text);
  border-radius: 50%;
 */} background-color: inherit;
  font-size: 16px;
`

const Title = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: #655a46;
  font-weight: bold;
`
