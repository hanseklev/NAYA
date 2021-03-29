import { Link } from "gatsby"
import GatsbyImage from "gatsby-image"
import parse from "html-react-parser"
import React from "react"
import styled from "styled-components"
import { StyledLink } from "../_shared/styles"

const BlogPostPreview = props => {
  const thumbImg =
    props.featuredImage &&
    props.featuredImage.node.localFile.childImageSharp.fixed

  if (typeof window !== "undefined") {
    localStorage.removeItem("blogCategory") &&
      props.category &&
      localStorage.setItem("blogCategory", props.category)
  }

  const AriaLabel = `Gå til innlegg ${props.title}`

  return (
    <Article>
      <Link
        style={{ textDecoration: "none", width: "100%" }}
        to={props.link}
        aria-label={AriaLabel}
      >
        <header style={{ width: "100%" }}>
          <ImageContainer>
            {thumbImg && (
              <GatsbyImage
                fixed={thumbImg}
                objectFit="cover"
                style={{ height: "100%", width: "100%" }}
              />
            )}
          </ImageContainer>
          <Title>{props.title}</Title>
        </header>
      </Link>

      <div className="excerpt">{parse(props.excerpt)}</div>
      <StyledLink weight="550" to={props.link} className="bottom-link">
        Les mer
      </StyledLink>
    </Article>
  )
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between
  text-decoration: none;
  margin: 0rem auto;
  min-width: 250px;
  height: 100%;

  .gatsby-image-wrapper {
    transition: all 250ms ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  .excerpt {
    width: 100%;

    p {
      margin-top: 0;
    }
  }

  .bottom-link {
${
  ""
  /*     margin-top: auto;
   */
}    texttransform: uppercase;
    textalign: left;
    width: 100%;
  }
`

const Title = styled.h2`
  text-align: left;
  font-size: 1.25rem;

  &a {
    text-decoration: none;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
`

export default BlogPostPreview
