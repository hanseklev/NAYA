import React from "react"
import styled from "styled-components"

const Author = ({ author }) => {
  const { name, description, avatar } = author.node
  return (
    <Container>
      <Section>
        <div className="author_image">
          {avatar.url && (
            <img
              src={avatar.url}
              width={avatar.width || '78px'}
              alt="Bilde av forfatteren"
              style={{margin:'0 auto'}}
            />
          )}
        </div>
      </Section>

      <Section size="2">
        <h3 style={{ textAlign: "left"}}>{name}</h3>
        {description && <p>{description}</p>}
      </Section>
    </Container>
  )
}

const Container = styled.aside`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
    width: 100%;
    height: 100%;
  }
`

export default Author
