import React from 'react';
import './styles/Form.css';
import {useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const addProjectMutation = gql`
    mutation addProject($title: String!, $description: String!) {
      addProject(title: $title, description: $description) {
        title
        description
        id
      }
    }
    `;

const Form = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [addProject, {data, error, loading}] = useMutation(addProjectMutation);

  const submitForm = (event) => {
    event.preventDefault();

    addProject({
      variables: {
        title: title,
        description: description,
      },
    });
  };

  if (loading) {
    return <p>Please wait</p>;
  }

  if (error) {
    return <p>Error</p>
  }

//const onSubmit = (e) => {
//  e.preventDefault()

//  if(!title) {
//    alert('Please add a project')
//    return
//  }

//  onAdd({ title, description })

//  setTitle('')
//  setDescription('')

//}

  return (
    <div className="form-component">
      <p className="form-title">Add a project</p>
      <form className="add-project-form-container" onSubmit={submitForm}>
        <label>
          <div className="form">
            <input type="text" placeholder="Project title" className="text-input" value={title} onChange={(event) => setTitle(event.target.value)} /><br/>
            <textarea placeholder="Project description" className="text-input" value={description} onChange={(event) => setDescription(event.target.value)} /><br/>
            <input type="submit" value="+" className="add-form-btn"></input>
          </div>
        </label>
      </form>
    </div>
  )
}

export default Form
