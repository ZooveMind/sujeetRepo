import React from 'react'
import "./Home.css"
import NavBar from "./NavBar"
import image from "../../src/assets/photo1.jpeg"
export const Home = () => {
    return (
        <div className='home' >
            <img src={image} className='brgImg' />
            <div className='iam'></div>
            <div className="content">
                <h1>Advanced Neuromorphic Systems for Space Exploration</h1>
                <h2>Cutting-Edge Neuromorphic Systems Redefining Earth and Space Research and Exploration</h2>
            </div>
        </div>
    )
}
