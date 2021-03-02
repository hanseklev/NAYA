import React from "react"
import MainLayout from "../../components/layout/"
import { Loader } from "../../components/_shared/loader"

const VippsFallback = () => {

  /* const payload = {
    merchantSerialNumber: 123456,
    orderId: "acme-shop-123-order123abc",
    transactionInfo: {
      amount: 20000,
      status: "RESERVED",
      timeStamp: "2018-12-12T11:18:38.246Z",
      transactionId: "5001420062",
    },
  } */

  return (
    <MainLayout>
      <Loader />
      <p>Vipps gjør greiene sine..</p>
    </MainLayout>
  )
}

export default VippsFallback
