import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"
import styled from "styled-components"

const SocialFeed = ({ globalLink, description }) => {
  const { feed } = useStaticQuery(graphql`
    query {
      feed: allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 3) {
        nodes {
          timestamp
          id
          caption
          localFile {
            url
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <SocialContainer>
      <div style={{ width: "100%", marginBottom: "2.5rem" }}>
        <h2>Instagram feed</h2>
      </div>
      {feed.nodes.length > 0 &&
        feed.nodes.map(node => (
          <div key={node.id} className="item">
            <a href={globalLink} className="link">
              <GatsbyImage fluid={node.localFile.childImageSharp.fluid} />
            </a>
          </div>
        ))}
    </SocialContainer>
  )
}

const SocialContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;

  .item {
    width: 100%;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .gatsby-image-wrapper {
    object-fit: cover;
    width: 250px;
    height: 250px;
    margin: 0 auto;
  }

  @media (min-width: 450px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 920px;

    .item {
      flex: 1;
      min-width: 50px;
      margin: 0 0.5rem;
    }

    .gatsby-image-wrapper {
      width: 200px;
      height: 200px;
    }
  }

  @media (min-width: 768px) {
    .gatsby-image-wrapper {
      width: 250px;
      height: 250px;
    }
  }
`

export default SocialFeed
