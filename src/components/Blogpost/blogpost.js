import GatsbyImage from "gatsby-image"
import parse from "html-react-parser"
import React from "react"
import Author from "./author"
import styles from "./blogpost.module.css"

export default function BlogPost(props) {
  const { title, date, content, author, featuredImage } = props
  const headerImage = featuredImage && featuredImage.node.localFile.childrenImageSharp[0].fluid
    /* featuredImage.node.localFile.childrenImageSharp &&
    featuredImage.node.localFile.childrenImageSharp[0].fluid
 */
  return (
    <article className={styles.article}>
      <header className={styles.header}>
       {headerImage && <GatsbyImage fluid={headerImage} style={{maxHeigth: '150px'}} />}
        <h1 className={styles.title}>{title}</h1>
        <ul>
          <li>Publisert {date}</li>
          <li>{author.node.name}</li>
        </ul>
      </header>

      {parse(content)}
      <hr/>
      <Author author={author} />
      <footer></footer>
    </article>
  )
}
