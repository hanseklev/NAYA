import React from "react"
import styled from "styled-components"

const Author = ({ author }) => {
  const { name, description, avatar } = author.node
  return (
    <Container>
      <Section>
        {avatar.url && (
          <img
            style={{ borderRadius: "50%" }}
            src={avatar.url}
            width="80px"
            alt="Bilde av forfatteren"
          />
        )}
      </Section>

      <Section>
        <h3 style={{ textAlign: "center" }}>{name}</h3>

        {description && <p>{description}</p>}
        <p>lblblbalbalablabalbablba</p>
      </Section>
    </Container>
  )
}

const Container = styled.aside`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
const Section = styled.div`
  flex: 1;
  display: inline-block;
`

/*.title {
  text-align: center;
}



.image {
  border-radius: 50%;
}
*/
export default Author
