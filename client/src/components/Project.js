import React, { useState }from 'react';
import './styles/Project.css';
import { FaTrash, FaEye } from 'react-icons/fa';
import { Link } from "react-router-dom";
import EdiText from 'react-editext';
import { useMutation, gql } from '@apollo/client';
import Projects from './Projects';

const deleteProjectMutation = gql`
    mutation deleteProject($id: ID!) {
        deleteProject(id: $id) {
            id
        }
    }`

const Project = ({ project, onDelete,}) => {
    const [value, setValue] = useState('')
    const handleSave = (val) => {
        console.log('Edited value ->', val);
        setValue(val);
    } 
    const [deleteProject, {data, error, loading}] = useMutation(deleteProjectMutation);
    
    deleteProject({
        variables: {
            id: project.id,
        }
    })
    return (
        <div>
            <div className="project-component">
                    <EdiText 
                    type="text" 
                    className="project-title" 
                    value={project.title} 
                    onSave={handleSave} 
                    showButtonsOnHover
                    submitOnUnfocus
                    cancelOnUnfocus
                    />
                    <br/>
                    <EdiText 
                    type="textarea" 
                    className="project-description" 
                    value={project.description} 
                    onSave={handleSave} 
                    showButtonsOnHover
                    submitOnUnfocus
                    cancelOnUnfocus
                    />
                    <Link to={`/projectpage/${project.id}`} className="view-icon"><FaEye/></Link>
                    <FaTrash className="delete-icon" onClick={deleteProject}/>
            </div>
        </div>
    )
}

  
export default Project