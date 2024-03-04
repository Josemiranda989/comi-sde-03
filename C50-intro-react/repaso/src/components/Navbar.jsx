import React from 'react'
import logo from '../assets/react.svg'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><a href="">Login</a></li>
                <li><a href="">Register</a></li>
            </ul>
            <img src={logo} alt="Logo react" />
        </div>
    )
}


