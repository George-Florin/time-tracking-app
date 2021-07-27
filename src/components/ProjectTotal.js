import React from 'react'
import MyContext from "../Context/Context";
import { useContext } from "react";

const ProjectTotal = () => {

    const context = useContext(MyContext)
    console.log(context)
    return <div>Count: {context.projects.length}</div>

}

export default ProjectTotal