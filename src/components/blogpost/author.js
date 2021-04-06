import React from "react"
import styled from "styled-components"

const Author = ({ author }) => {
  const { name, description, avatar } = author.node
  console.log('avatar_url', avatar.url);
  const parseUrl = avatar.url.replace("-100x100", "-500x500")
  console.log('parsed', parseUrl);

  return (
    <Container>
      <Section>
        <div className="author_image">
          {avatar.url && (
            <img
              src={parseUrl}
              alt="Bilde av forfatteren"
              style={{
                margin: "0 auto",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              width="200px"
              height="200px"
            />
          )}
        </div>
      </Section>

      <Section size="2">
        <h2>{name}</h2>
        {description && <p>{description}</p>}
      </Section>
    </Container>
  )
}

const Container = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
  }
  @media (min-width: 450px) {
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;

    h2 {
      text-align: left;
    }
  }
`
const Section = styled.div`
  flex: ${props => props.size || 1};
  display: inline-block;
  justify-content: center;
  align-items: "center";

  .author_image {
    display: flex;
    align-items: center;
    justify-items: center;
    padding-right: 1.5rem;
    width: 100%;
    height: 100%;
  }
`

export default Author
