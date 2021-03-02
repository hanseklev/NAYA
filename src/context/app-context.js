import React, { createContext, useState } from "react"

const AppContext = createContext({})
const [hideHeader, setHideHeader] = useState(false)

const AppProvider = () => {
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider }
