import { Link } from "gatsby"
import React from "react"
import styles from "./sidebar.module.css"

const Sidebar = ({ elements }) => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.list}>
          {elements.map((elem, i) => (
            <li className={styles.listitem} key={i}>
              <Link to={elem}>{elem}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
