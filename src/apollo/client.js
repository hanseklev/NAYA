import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
} from "@apollo/client"

import fetch from "node-fetch"
import ApolloLinkTimeout from 'apollo-link-timeout';


const uri = "https://admin.naya.no/graphql"

const timeoutLink = new ApolloLinkTimeout(10000);
const cmsLink = new HttpLink({
  uri: uri,
  fetch: fetch,
  credentials: 'include'
 /*  headers: {
    "Access-Control-Allow-Origin": "*",
  }, */
})

const httpLink = cmsLink // timeoutLink.concat(cmsLink)

const middleware = new ApolloLink((operation, forward) => {
  const session =
    typeof window !== "undefined" ? localStorage.getItem("woo-session") : null

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
    const session = context.response.headers.get("woocommerce-session")

    if (session && typeof window !== "undefined") {
      // Remove session data if session destroyed.
      if ("false" === session) {
        localStorage.removeItem("woocommerce-session")

        // Update session new data if changed.
      } else if (localStorage.getItem("woocommerce-session") !== session) {
        localStorage.setItem("woocommerce-session", session)
      }
    }

    return response
  })
})

export const client = new ApolloClient({
  link: middleware.concat(afterware.concat(httpLink)),
  cache: new InMemoryCache(),
})
