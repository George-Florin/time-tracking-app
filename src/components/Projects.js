import React from 'react'
import './styles/Projects.css';
import Project from './Project';
import ProjectTotal from './ProjectTotal';

const Projects = ({ projects, onDelete }) => {
    return (
        <div>
            {projects.length > 0 ? <p className="list-title">Projects</p> : <p className="no-projects-msg">No projects yet</p>}
            {projects.map((project, index) => (<Project key={index} project={project} onDelete={onDelete} />))}
            <ProjectTotal />
        </div>
    )
}

export default Projects
