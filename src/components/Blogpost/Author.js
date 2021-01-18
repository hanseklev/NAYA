import React from "react"

const Author = ({ author }) => {
  const { name, description, avatar } = author.node
  return (
    <aside>
      <h3>{name}</h3>
      {avatar.url && (
        <img src={avatar.url} width="240px" alt="Bilde av forfatteren" />
      )}
      {description && <p>{description}</p>}
    </aside>
  )
}

export default Author
