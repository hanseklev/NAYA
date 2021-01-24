import { ApolloProvider } from "@apollo/client"
import React from "react"
import { client } from "./src/apollo/client"
import { ShopProvider } from "./src/context/shop-context"

export const wrapRootElement = ({ element }) => (
  <ShopProvider>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </ShopProvider>
)
