import { gql } from "@apollo/client"

export const CHECKOUT_MUTATION = gql`
  mutation CHECKOUT_MUTATION($input: CheckoutInput!) {
    checkout(input: $input) {
      clientMutationId
      order {
        id
        orderKey
        orderNumber
        refunds {
          nodes {
            amount
          }
        }
        status
      }
      result
      redirect
    }
  }
`
