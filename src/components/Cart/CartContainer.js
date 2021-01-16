import React from "react"

import styles from './cart.module.css'
export const CartContainer = ({ children }) => (
  <section>
    <ul>{children}</ul>
  </section>
)
