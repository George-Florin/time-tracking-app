import { createContext, useState } from 'react';

export const DefaultState = {projects:[], project: null}
const MyContext = createContext(DefaultState)

export const MyContextProvider = (props) => {

    const [projects, setProjects] = useState([]) 

    return <MyContext.Provider value={{projects, setProjects}}>{props.children}</MyContext.Provider>
}


export default MyContext