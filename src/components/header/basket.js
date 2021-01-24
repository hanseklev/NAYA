import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.css"


export const BasketIcon = () => (
  <svg viewBox="0 0 16 16" width="24px" fill="#000">
    <title> {"Basket"} </title> <path d="M16 16H0V5h3v1H1v9h14V6h-2V5h3v11z" />
    <path d="M12 9h-1V1H5v8H4V0h8v9z" />
    <path d="M6 5h4v1H6z" />
  </svg>
)

export default ({ openBasket, quantity }) => (
  <Link to="/cart" className={styles.basket}>
  <span>{quantity}</span>
    <BasketIcon />
  </Link>
)

/*     <motion.button >
  whileHover={{ scale: 1.1, backgroundColor: "red", color: "white" }}
  {/*     </motion.button>
*/
