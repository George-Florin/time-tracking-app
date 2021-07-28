import React from 'react'
import './styles/TimeTotal.css'
import TimeContext from "../Context/TimeContext";
import { useContext } from "react";

const TimeTotal = ({ time }) => {

    const context = useContext(TimeContext)
    const timesSum = context.times.reduce((acc, {time}) => {
        return acc + time
      }, 0);
    console.log(context)

    return <div className="time-total">Total: {timesSum} </div>

}

export default TimeTotal