import React from 'react'
import './styles/Time.css'
import { FaTrash } from 'react-icons/fa';
import TimeAmount from './TimeAmount';

const Time = ({ time, onDelete }) => {
    return (
        <div className="hours-table">
            <h3>Activity: {time.activity}</h3>
            <h4>Date: {time.date}</h4>
            <TimeAmount time={time} />
            <FaTrash className="time-delete-icon" onClick={() => onDelete(time.id)}/>
        </div>
    )
}

export default Time
