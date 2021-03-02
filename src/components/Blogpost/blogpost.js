import parse from "html-react-parser"
import React from "react"
import styled from "styled-components"
import Hero from "../hero"
import Author from "./author"
import Button from "../_shared/button"
import { ContentContainer } from "../_shared/container"

export default function BlogPost(props) {
  const { title, date, content, author, featuredImage } = props
  const headerImage = featuredImage && featuredImage.node.localFile

  return (
    <Article>
      <Button
        goBack
        label="Til journal"
        onClick={() => window.history.back()}
      />
      <Hero desktopImage={headerImage} hasText title={title} />
      <Container>
        <AuthorHeader>
          <li>Publisert {date}</li>
          <li>~</li>
          <li>{author.node.name}</li>
        </AuthorHeader>
        <ContentContainer>{parse(content)}</ContentContainer>
        <hr />
        <Author author={author} />
      </Container>
    </Article>
  )
}

const Article = styled.article`
  display: flex row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`

const AuthorHeader = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0;
  justify-content: space-between;
`

const Container = styled.div`
  max-width: 660px;
  margin: 0 auto;
  overflow: hidden;
`
/* const Content = styled.div`
  & > p {
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }

  & > img {
    width: 100%;
  }

  & > ul {
    margin: 0;
    padding: 0;
  }

  & li {
    margin: 5px 0;
    line-height: 1.5rem;
  }

  & > ol {
    padding: 0;
    padding-inline-start: 1rem;
    margin: 0;
  }
`
 */
