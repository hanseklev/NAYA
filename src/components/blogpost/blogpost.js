import "@wordpress/block-library/build-style/style.css"
import parse from "html-react-parser"
import React from "react"
import styled from "styled-components"
import Hero from "../hero"
import Button from "../_shared/button"
import { ContentContainer } from "../_shared/styles"
import Author from "./author"


export default function BlogPost(props) {
  const { title, date, content, author, featuredImage } = props
  const headerImage = featuredImage && featuredImage.node.localFile

  return (
    <Article>
      <Button
        style={{ paddingLeft: "2rem" }}
        goBack
        label="Til journal"
        onClick={() => window.history.back()}
      />
      {headerImage && <Hero desktopImage={headerImage} hasText title={title} />}
      <ContentContainer>
        {!headerImage && <AltTitle>{title}</AltTitle>}

        <AuthorHeader>
          <li>Publisert {date}</li>
          <li>~</li>
          <li>{author.node.name}</li>
        </AuthorHeader>
        {content && parse(content)}
        <hr />
        <Author author={author} />
      </ContentContainer>
    </Article>
  )
}

const Article = styled.article`
  display: flex row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 auto;

  @media (min-width: 769px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const AuthorHeader = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 0rem;
  margin-bottom: 3rem;
  padding: 0;
  justify-content: space-between;
`

const AltTitle = styled.h1`
  margin: 0 auto;
`
