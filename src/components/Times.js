import React from 'react'
import './styles/Times.css'
import Time from './Time';
import TimeTotal from './TimeTotal';

const Times = ({ times, onDelete, amount }) => {
    return (
        <div>
            {times.length > 0 ? <p className="time-title">Time</p> : <p className="no-time-msg">Time: nothing here yet</p>}
            {times.map((time, index) => (<Time key={index} time={time} onDelete={onDelete}/>))}
            <TimeTotal amount={amount}/>
       </div>
    )
}

export default Times
