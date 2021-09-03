import { useContext } from "react";
import React from 'react';
import './styles/Main.css'
import Projects from './Projects'
import Form from './Form'
import MyContext from "../Context/Context";

const Main = () => {
  const {projects, setProjects} = useContext(MyContext)

//  console.log(projects)

//  useEffect(() => {
//    const getProjects = async () => {
//      const projectsFromServer = await fetchProjects()
//      setProjects(projectsFromServer)
//    }

//    getProjects()
//  }, [])

// Fetch Projects
//const fetchProjects = async () => {
//  const res = await fetch('http://localhost:5000')
//  const data = await res.json()

//  return data
//}

// Add project
//const addProject = async (project) => {
//  const res = await fetch ('http://localhost:5000', {
//    method: 'POST',
//    headers: {
//      'Content-type': 'application/json'
//    },
//    body: JSON.stringify(project)
//  })

//  const data = await res.json()

//  setProjects([...projects, data])

//  const id = Math.floor(Math.random() * 10000) + 1
//  const newProject =  { id, ...project }
//  setProjects([...projects, newProject])
//}

// Edit project
//const editProject = (id) => {
  //console.log(id)
//}

// Delete project
//const deleteProject = async (id) => {
//  await fetch(`http://localhost:5000/${id}`, {
//    method: 'DELETE'
//  })

//  setProjects(projects.filter((project) => project.id !== id))
//}

  return (
    <div className="main-page">
        <Form />
        <Projects projects={projects} />
    </div>
  )
}

export default Main
