import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-text">Time tracker</Link> 
            </div>
        </div>
    )
}

export default Navbar