import PropTypes from "prop-types"
import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { ShopContext } from "../../context/shop-context"
import { debounce } from "../../lib/helpers"
import CartContainer from "../cart/cart-container"
import Logo from "../logo"
import { NavigationDesktop } from "../navigation"
import Button from "../_shared/button"
import ModalContainer from "../_shared/modal-container"

const Header = () => {
  const [isHidden, setIsHidden] = useState(false)
  const { openCart, setOpenCart, cart } = useContext(ShopContext)

  const quantity = cart.totalProductsCount

  useEffect(() => {
    let mounted = true
    if (mounted) debounce(setScrollDirection, 300)
    return () => { mounted = false }
  }, [])

  function setScrollDirection() {
    if (typeof window !== "undefined") {
      let prevScrollPosition = window.pageYOffset
      window.onscroll = () => {
        window.pageYOffset < prevScrollPosition
          ? setIsHidden(false)
          : setIsHidden(true)
        prevScrollPosition = window.pageYOffset
      }
    }
  }

  return (
    <>
      <Container hideHeader={isHidden}>
        <Column>
          <NavigationDesktop />
        </Column>
        <Column pr={2}>
          <Logo styles={{ border: "solid" }} />
        </Column>
        <Column>
          <Button
            basket
            quantity={quantity}
            onClick={() => setOpenCart(!openCart)}
          />
        </Column>
      </Container>
      <ModalContainer isOpen={openCart} slideLeft={false}>
        <CartContainer closeCart={() => setOpenCart(false)} />
      </ModalContainer>
    </>
  )
}

const Container = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: sticky;
  position: -webkit-sticky;
  z-index: 99;
  background-color: #fbfaf8;

  top: ${props => (props.hideHeader ? "-60px" : "0")};
  transition: top 0.5s;
`

const Column = styled.div`
  display: flex;
  flex: 3;
  justify-content: flex-start;
  padding-right: ${props => props.pr || 0}

  &:first-child {
    justify-content: flex-start;
  }

  &:nth-child(2) {
    padding-left: ${props => props.pr || 0}rem;
    flex: 1;
    justify-content: center;
  }

  &:last-child {
    padding-right: 1rem;
    justify-content: flex-end;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
