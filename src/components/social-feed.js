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
      <div style={{ width: "100%", marginBottom: "1rem" }}>
        <h2>Instagram feed</h2>
        <p style={{ textAlign: "center" }}>{description}</p>
      </div>
      {feed.nodes.length > 0 &&
        feed.nodes.map(node => (
          <div key={node.id} className="item">
            <a href={globalLink} className="link">
              <GatsbyImage
                style={{ width: "220px", height: "220px", objectFit: "cover", border: 'solid 3px' , padding: '10px'}}
                fluid={node.localFile.childImageSharp.fluid}
              />
            </a>
          </div>
        ))}
    </SocialContainer>
  )
}

const SocialContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  text-align: center;

  .item {
    width: 100%;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (min-width: 350px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 768px;

    .item {
      flex: 1;
      min-width: 50px;
      margin: 0 0.5rem;
    }
  }
`

export default SocialFeed
