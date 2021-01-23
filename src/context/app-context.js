import React, { createContext, useReducer } from "react"
import Cookie from "js-cookie"
const storage = Cookie.get("cartItems") ? Cookie.getJSON("cartItems") : []

const initialState = {
  cartItems: storage,
  checkout: false,
}

const ProductContext = createContext({})


function ProductReducer(state, action) {
  const idx = state.cartItems.indexOf(action.payload)
  switch (action.type) {
      
    case "ADD_ITEM":
      if (!state.cartItems.find(item => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        })
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
      }
    case "DELETE_ITEM":
      if (idx > -1) state.cartItems.splice(idx, 1)

      return {
        ...state,
        cartItems: [...state.cartItems],
      }
    case "INCREASE":
      if (idx > -1) state.cartItems[idx].quantity++

      return {
        ...state,
      }

    case "DECREASE":
      if (state.cartItems[idx].quantity <= 1) return { ...state }
      if (idx > -1) state.cartItems[idx].quantity--

      return {
        ...state,
      }
    /*  case "GET_COUNT":
      return sumItems(state.cartItems) */
    case "CLEAR_CART":
      Cookie.remove("cartItems")
      state.cartItems.splice(0, state.cartItems.length)
      return {...state}
    default:
      return state
  }
}

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState)

  const addItem = payload => {
    dispatch({ type: "ADD_ITEM", payload })
    Cookie.set("cartItems", JSON.stringify(state.cartItems))
  }

  const deleteItem = payload => {
    dispatch({ type: "DELETE_ITEM", payload })
    Cookie.set("cartItems", JSON.stringify(state.artItems))
  }

  const increase = payload => {
    dispatch({ type: "INCREASE", payload })
  }
  const decrease = payload => {
    dispatch({ type: "DECREASE", payload })
  }

  const checkout = payload => {
    dispatch({ type: "CHECKOUT", payload })
  }

  const setShippingAddress = payload => {
    dispatch({ type: "SET_SHIPPING_ADRESS", payload })
  }

  const createOrder = order => {
    dispatch({ type: "CREATE_ORDER", payload: order })
 
  }

  const clearCart = (payload) => {
    dispatch({ type: "CLEAR_CART", payload })
  }

  const values = {
    addItem,
    deleteItem,
    increase,
    decrease,
    checkout,
    setShippingAddress,
    createOrder,
    clearCart,
    ...state,
  }

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider }
