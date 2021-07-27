import { useState } from 'react';
import React from 'react'
import "./styles/TimeForm.css"

const TimeForm = ({ onAdd }) => {
  const [activity, setActivity] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

const onSubmit = (e) => {
  e.preventDefault()

  if(!activity) {
    alert('Please fill in the form')
    return
  }

  onAdd({ activity, date, time})

  setActivity('')
  setDate('')
  setTime('')
}

  return (
    <div className="time-form-component">
      <p className="time-form-title">Add time</p>
       <form className="add-time-form-container" onSubmit={onSubmit}>
             <label>
              <div className="time-form">
               <input type="text" placeholder="Activity" className="text-input" value={activity} onChange={(e) => setActivity(e.target.value)} /><br/>
               <input type="date" placeholder="Date (DD.MM.YYYY)" className="text-input" value={date} onChange={(e) => setDate(e.target.value)} /><br/>
               <input type="number" placeholder="Time (in hours)" name="Hours" className="text-input" value={time} onChange={(e) => setTime(e.target.value)} /><br/>
               <input type="submit" value="+" className="add-time-btn" />
             </div>
            </label>
       </form>
    </div>
  )
}

export default TimeForm
