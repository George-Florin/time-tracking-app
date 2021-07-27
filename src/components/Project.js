import React, { useState }from 'react';
import './styles/Project.css';
import { FaTrash, FaEye, FaRedo} from 'react-icons/fa';
import { Link } from "react-router-dom";
import EdiText from 'react-editext';


const Project = ({ project, onDelete}) => {
    const [value, setValue] = useState('')

    const handleSave = (val) => {
        console.log('Edited value ->', val);
        setValue(val);
    } 

    return (
        <div>
            <div className="project-component">
                    <EdiText type="text" 
                    className="project-title" 
                    value={project.title} 
                    onSave={handleSave} 
                    showButtonsOnHover
                    submitOnUnfocus
                    cancelOnUnfocus></EdiText>
                    <br/>
                    <EdiText type="textarea" 
                    className="project-description" 
                    value={project.description} 
                    onSave={handleSave} 
                    showButtonsOnHover
                    submitOnUnfocus
                    cancelOnUnfocus></EdiText>
                    <Link to={`/projectpage/${project.id}`} className="view-icon"><FaEye/></Link>
                    <FaTrash className="delete-icon" onClick={() => onDelete(project.id)}/>
            </div>
        </div>
    )
}

export default Project