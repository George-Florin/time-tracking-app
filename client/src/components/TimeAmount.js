import React from 'react'

const TimeAmount = ({ time }) => {
    return (
        <div>
            <p value={time.time}>Time: {time.time} hour(s)</p>
        </div>
    )
}

export default TimeAmount
