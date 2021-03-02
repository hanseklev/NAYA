import { CardElement } from '@stripe/react-stripe-js';
import React from "react";


const PaymentOptions = ({handleChange}) => {
  const elements = useElements();

  

  if (loading) return<p>Laster inn..</p>

  console.log(data) 
  const nodes = data.paymentGateways.nodes

  return (
  <CardElement/>
  )
}

export default PaymentOptions


/* const {data, loading} = useQuery(
    gql`
      query {
        paymentGateways {
          nodes {
            title
            id
            description
          }
        }
      }
    `
  ) */