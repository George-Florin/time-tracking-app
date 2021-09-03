import React from 'react'
import './styles/Projects.css';
import Project from './Project';
import ProjectTotal from './ProjectTotal';
import { useQuery, gql } from '@apollo/client';

const getProjectQuery = gql`
    query project($id: ID!) {
        query project(id: $id) {
            id
            title
            description
        }
    }
`;

const Projects = ({ projects, onDelete, project, props }) => {
    const { loading, error, data } = useQuery(getProjectQuery, {
        variables: {
            id: project.id,
        }
    });


    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error</p>
    }

    if (!data || !data.project) {
        return <p>Projects not found</p>
    }

    return (
        <div>
            {projects.length > 0 ? <p className="list-title">Projects</p> : <p className="no-projects-msg">No projects yet</p>}
            {projects.map((project, index) => (<Project key={index} project={project} onDelete={onDelete} />))}
            <ProjectTotal />
        </div>
    )
}

export default Projects
