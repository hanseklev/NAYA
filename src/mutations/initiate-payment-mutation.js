import { gql } from "@apollo/client";

export const INITIATE_PAYMENT = gql`
mutation INITIATE_PAYMENT($orderId: String!, $clientMutationId: String!) {
  initiatePayment(
    input: { orderId: $orderId, clientMutationId: $clientMutationId }
  ) {
    success
    redirectUrl
  }
}
`