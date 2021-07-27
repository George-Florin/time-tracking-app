import React from 'react';
import './styles/Form.css';
import {useState } from 'react';

const Form = ({ onAdd }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

const onSubmit = (e) => {
  e.preventDefault()

  if(!title) {
    alert('Please add a project')
    return
  }

  onAdd({ title, description })

  setTitle('')
  setDescription('')

}

  return (
    <div className="form-component">
      <p className="form-title">Add a project</p>
      <form className="add-project-form-container" onSubmit={onSubmit}>
        <label>
          <div className="form">
            <input type="text" placeholder="Project title" className="text-input" value={title} onChange={(e) => setTitle(e.target.value)} /><br/>
            <textarea placeholder="Project description" className="text-input" value={description} onChange={(e) => setDescription(e.target.value)} /><br/>
            <input type="submit" value="+" className="add-form-btn"></input>
          </div>
        </label>
      </form>
    </div>
  )
}

export default Form
