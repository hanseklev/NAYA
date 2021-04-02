import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client"
import fetch from "node-fetch"

const uri = "https://admin.naya.no/graphql"

const httpLink = new HttpLink({
  uri: uri,
  fetch: fetch,
  credentials: "include",
})

const middleware = new ApolloLink((operation, forward) => {
  const session =
    typeof window !== "undefined"
      ? localStorage.getItem("woocommerce-session")
      : null

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
