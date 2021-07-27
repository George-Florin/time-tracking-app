import React from 'react'
import Project from './Project'

const Title = () => {
    return (
        <div className="title">
            <h1>Title {Project.title}</h1>
            <h3>{Project.description}</h3>
        </div>
    )
}

export default Title
