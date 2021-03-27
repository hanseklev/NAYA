import Cookie from "js-cookie"
import React, { createContext, useState } from "react"

const cartData = Cookie.get("naya_cart") ? Cookie.getJSON("naya_cart") : []

export const ShopContext = createContext({})

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(cartData)
  const [openCart, setOpenCart] = useState(false)


  return (
    <ShopContext.Provider value={{ cart, setCart, openCart, setOpenCart }}>
      {children}
    </ShopContext.Provider>
  )
}
