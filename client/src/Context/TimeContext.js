import { createContext, useState } from 'react';

export const DefaultTimeState = {times:[], time: null}
const TimeContext = createContext(DefaultTimeState)

export const TimeContextProvider = (props) => {

    const [times, setTimes] = useState([]) 

    return <TimeContext.Provider value={{times, setTimes}}>{props.children}</TimeContext.Provider>
}


export default TimeContext