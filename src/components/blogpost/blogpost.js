import parse from "html-react-parser"
import React, { useEffect } from "react"
import styled from "styled-components"
import Hero from "../hero"
import { JournalBreadcrumb } from "../_shared/breadcrumb"
import { ContentContainer } from "../_shared/styles"
import Author from "./author"

export default function BlogPost(props) {
  const { title, date, content, author, featuredImage } = props
  const headerImage = featuredImage && featuredImage.node.localFile
  let category = props.categories.nodes[1].name

  if (typeof window !== undefined) {
    category = localStorage.getItem("blogCategory")
      ? localStorage.getItem("blogCategory")
      : category
  }

  return (
    <Article>
      <JournalBreadcrumb post={{ name: title }} category={category} />
      {headerImage && (
        <Hero filter desktopImage={headerImage} hasText title={title} />
      )}
      <ContentContainer>
        {!headerImage && <AltTitle>{title}</AltTitle>}

        <AuthorHeader>
          <li>Publisert {date}</li>
          <li>~</li>
          <li style={{ textAlign: "right" }}>{author.node.name}</li>
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
  margin-bottom: 2rem;
  padding: 0;
  justify-content: space-between;

  @media min-width(768px) {
    margin-bottom: 3rem;
  }
`

const AltTitle = styled.h1`
  margin: 0 auto;
`
