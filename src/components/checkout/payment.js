import React from "react";


const PaymentOptions = ({handleChange}) => {

  

  if (loading) return<p>Laster inn..</p>

  console.log(data) 

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