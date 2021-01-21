import { ApolloClient, HttpLink, ApolloLink, InMemoryCache } from "@apollo/client"

const httpLink = new HttpLink({
  uri: 'http://nayatest.local/graphql',
})

console.log(httpLink);
const middleware = new ApolloLink((operation, forward) => {
  const session = localStorage.getItem("woo-session")
  if (session) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        "naya-woo-session": `Session ${session}`,
      },
    }))
  }

  return forward(operation)
})

const afterware = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const context = operation.getContext()
    const {
      response: { headers },
    } = context
    const session = headers.get("naya-woo-session")
    if (session) {
      if (localStorage.getItem("woo-session") !== session) {
        localStorage.setItem("woo-session", headers.get("naya-woo-session"))
      }
    }

    return response
  })
})

export const client = new ApolloClient({
  link: middleware.concat(afterware.concat(httpLink)),
  cache: new InMemoryCache(),
  clientState: {},
})
