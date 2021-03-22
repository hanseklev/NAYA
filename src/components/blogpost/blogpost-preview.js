import { Link } from "gatsby"
import GatsbyImage from "gatsby-image"
import parse from "html-react-parser"
import React from "react"
import styled from "styled-components"
import { getBlogUrl } from "../../lib/helpers"
import { StyledLink } from "../_shared/styles"

const BlogPostPreview = props => {
  const thumbImg =
    props.featuredImage &&
    props.featuredImage.node.localFile.childImageSharp.fixed

  return (
    <Article>
      <Link
        style={{ textDecoration: "none", width: "100%" }}
        to={getBlogUrl(props.slug)}
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

      <div style={{ fontSize: "14px", width: "100%" }}>
        {parse(props.excerpt)}
      </div>
      <StyledLink
        weight="550"
        to={getBlogUrl(props.slug)}
        style={bottomLinkStyle}
      >
        Les mer
      </StyledLink>
    </Article>
  )
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 1rem auto;
  min-width: 250px;

  .gatsby-image-wrapper {
    transition: all 250ms ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const Title = styled.h3`
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

const bottomLinkStyle = {
  textTransform: "uppercase",
  textAlign: "left",
  width: " 100%",
}
export default BlogPostPreview
