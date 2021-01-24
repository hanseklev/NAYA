import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
} from "@apollo/client"

import fetch from "isomorphic-fetch"

const httpLink = new HttpLink({
  uri: "http://nayatest.local/graphql",
  fetch: fetch,
})

const middleware = new ApolloLink((operation, forward) => {
  const session = localStorage.getItem("woo-session")

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

    if (session) {
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
  link: middleware.concat(afterware.concat(httpLink)),
  cache: new InMemoryCache(),
  connectToDevTools: true
})
