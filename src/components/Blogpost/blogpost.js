import parse from "html-react-parser"
import React from "react"
import Author from "./Author"
import styles from "./blogpost.module.css"

export default function BlogPost(props) {
  const { title, date, content, featuredImage, author } = props
  console.log(author)

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <ul>
          <li>Publisert {date}</li>
          <li>Skrevet av {author.node.name}</li>
        </ul>
      </header>

      {parse(content)}
      <Author author={author} />
      <footer></footer>
    </article>
  )
}
