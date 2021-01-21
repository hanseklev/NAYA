import React, { createContext, useReducer } from "react"

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : []

const initialState = {
  cartItems: storage,
  checkout: false,
}

const ProductContext = createContext({})

function sumItems(cart) {
  let itemCount = cart.reduce((total, product) => total + product.quantity, 0)
  let total = cart
    .reduce(
      (total, product) => total + product.price * product * product.quantity,
      0
    )
    .toFixed(2)
  return { itemCount, total }
}

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
    case "CLEAR":
      break
    case "CHECKOUT":
      break
    default:
      return state
  }
}

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState)

  const addItem = payload => {
    dispatch({ type: "ADD_ITEM", payload })
  }

  const deleteItem = payload => {
    dispatch({ type: "DELETE_ITEM", payload })
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

  const values = {
    addItem,
    deleteItem,
    increase,
    decrease,
    checkout,
    ...state,
  }

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider }
