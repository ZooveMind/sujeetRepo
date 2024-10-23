import React from 'react'
import "./NavBar.css"
//import Logo from './models/Logo'
// import logo from "../assets/zooveLogo3.png"
const NavBar = () => {
    return (
        <div className='header'>
            <p>Zoove</p>
            {/* <Logo/> */}
            {/* <img src={logo} alt="" /> */}
            <nav>
                <ul>
                    {/* <li><a href="#Home">Home</a></li> */}
                    <li><a href="#AboutUs">About</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar