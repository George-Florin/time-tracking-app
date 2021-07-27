import React from 'react'
import './styles/TimeTotal.css'
import TimeContext from "../Context/TimeContext";
import { useContext } from "react";
import Time from './Time';
import TimeAmount from './TimeAmount';

const TimeTotal = ({ time, amount }) => {

    const context = useContext(TimeContext)
    console.log(context)
    return <div className="time-total">Total: {context.times.length}</div>

}

export default TimeTotal