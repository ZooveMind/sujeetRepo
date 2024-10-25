import React from 'react'
import "./NavBar.css"
//import Logo from './models/Logo'
import logo from "../assets/ZooveLogoMain.png"
const NavBar = () => {
    return (
        <div className='header'>
            {/* <p>Zoove</p> */}
            {/* <Logo/> */}
            <div>
                <img src={logo} alt="" className='navLogo'/>
            </div>
            <nav>
                <ul>
                    {/* <li><a href="#Home">Home</a></li> */}
                    <li><a href="#AboutUs">About</a></li>
                    <li><a href="#Services">Products</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar