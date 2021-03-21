import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
} from "@apollo/client"

import fetch from "isomorphic-fetch"

const uri = 'https://admin.naya.no/graphql'
//http://naya.me/graphql

const cmsLink = new HttpLink({
  uri: uri,
  fetch: fetch,
})

const middleware = new ApolloLink((operation, forward) => {
  const session = typeof window !== "undefined" ? localStorage.getItem("woo-session") :  null

  if (session) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        "woocommerce-session": `Session ${session}`,
      },
    }))
  }
  return forward(operation)
})

const afterware = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const context = operation.getContext()
    const session = context.response.headers.get('woocommerce-session')

    if (session && typeof window !== "undefined") {
      // Remove session data if session destroyed.
      if ("false" === session) {
        localStorage.removeItem("woo-session")

        // Update session new data if changed.
      } else if (localStorage.getItem("woo-session") !== session) {

        localStorage.setItem("woo-session", session)
      }
    }

    return response
  })
})

export const client = new ApolloClient({
  link: middleware.concat(afterware.concat(cmsLink)),
  cache: new InMemoryCache(),
  connectToDevTools: true
})
