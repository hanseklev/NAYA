import React from "react"
import { ApolloProvider } from "@apollo/client"
import { client } from "./src/client/apollo"
const { ProductProvider } = require("./src/context/productContext")

require("./src/theme/global.css")

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <ProductProvider>{element}</ProductProvider>
  </ApolloProvider>
)
