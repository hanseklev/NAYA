import { ApolloProvider } from "@apollo/client"
import React from "react"
import { client } from "./src/apollo/client"
import { ShopProvider } from "./src/context/shop-context"

require("./src/styles/global.css")

export const wrapRootElement = ({ element }) => (
  <ShopProvider>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </ShopProvider>
)
