import React from 'react'

const Author = ({author}) => {
    const {name, description, avatar_url} = author.node
    return (
        <aside>
            <h3>{name}</h3>
            <p>{description}</p>
            <img src={avatar_url} width="240px" alt="Bilde av forfatteren"/>
        </aside>
    )
}

export default Author