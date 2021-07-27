import { useEffect, useContext } from 'react';
import React from 'react';
import './styles/ProjectPage.css';
import TimeForm from './TimeForm';
import Times from './Times';
import TimeContext from '../Context/TimeContext';
import Title from './Title';

const ProjectPage = ({ project, match}) => {
    const {params: {id}} = match
    const {times, setTimes} = useContext(TimeContext)

    useEffect(() => {
        const getTimes = async () => {
            const timesFromServer = await fetchTimes()
            setTimes(timesFromServer)
        }

       getTimes()
    }, [])

// Fetch Times
const fetchTimes = async () => {
    const res = await fetch('http://localhost:5000/times')
    const data = await res.json()

    return data
} 

// Add time
const addTime = async (time) => {
    const res = await fetch('http://localhost:5000/times', {
        method: 'POST',
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify(time)
    })
    
    const data = await res.json()

    setTimes([...times, data])
    
//    const id = Math.floor(Math.random * 10000) + 1
//    const newTime = { id, ...time }
//    setTimes([...times, newTime])
}

// Delete time
const deleteTime = async (id) => {
    await fetch(`http://localhost:5000/times/${id}`, {
        method: 'DELETE',
    })

    setTimes(times.filter((time) => time.id !== id))
}

    return (
        <div className="single-project">
            <Title />
            <TimeForm onAdd={addTime}/>
            <Times times={times} onDelete={deleteTime}/>
        </div>
    )
}

export default ProjectPage