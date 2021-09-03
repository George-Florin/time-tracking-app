import React from 'react'

const Title = ({title, description}) => {
    return (
        <div className="title">
            <h1 value={title}>{title}</h1>
            <h3 value={description}>{description}</h3>
        </div>
    )
}

export default Title
