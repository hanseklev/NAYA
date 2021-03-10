import React from "react"

const StockStatus = ({ stockStatus }) => {
  if (stockStatus === "IN_STOCK")
    return <p style={{ color: "green" }}>På lager</p>
  else return <p style={{ color: "red" }}>Ikke på lager</p>
}

export default StockStatus
