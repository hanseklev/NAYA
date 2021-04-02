import React, { createContext, useEffect, useState } from "react"

export const ShopContext = createContext(null)

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(null)
  const [openCart, setOpenCart] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      let cartData = localStorage.getItem("naya-cart")
      cartData = cartData !== null ? JSON.parse(cartData) : null
      setCart(cartData)
    }
  }, [])

  return (
    <ShopContext.Provider value={{ cart, setCart, openCart, setOpenCart }}>
      {children}
    </ShopContext.Provider>
  )
}
