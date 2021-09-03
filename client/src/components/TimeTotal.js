import React from 'react'
import './styles/TimeTotal.css'
import TimeContext from "../Context/TimeContext";
import { useContext } from "react";

const TimeTotal = ({ time }) => {

    const context = useContext(TimeContext)
    const totalDuration = context.times.reduce((total, entry) => parseInt(entry.time) + total, 0)
    return <div className="time-total">Total: {totalDuration} hour(s)</div>

}

export default TimeTotal