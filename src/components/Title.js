import React from 'react'
import Form from './Form'
import Project from './Project'

const Title = ({title, description}) => {
    return (
        <div className="title">
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>
    )
}

export default Title
