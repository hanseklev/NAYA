import React from "react"

const StockStatus = ({ stockStatus }) => {
  if (stockStatus === "IN_STOCK")
    return (
      <p style={{ color: "#6D735D", textTransform: "uppercase" }}>På lager</p>
    )
  else
    return (
      <p style={{ color: "#956741", textTransform: "uppercase" }}>
        Ikke på lager
      </p>
    )
}

export default StockStatus
