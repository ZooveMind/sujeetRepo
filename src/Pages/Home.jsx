import React from 'react'
import "./Home.css"
import NavBar from "./NavBar"
import image from "../../src/assets/bgneuro.jpeg"
//import image from "../../src/assets/bgimage.webp"
export const Home = () => {
    return (
        <div className='home' >
            <img src={image} className='brgImg' />
            <div className='iam'></div>
            <div className="content">
                <h1>Advanced Neuromorphic Systems for Space Exploration</h1>
                <h2>Cutting-Edge Neuromorphic Systems Redefining Earth and Space Research and Exploration</h2>
            </div>
            <span className='underProgress'>*Website in progress</span>
        </div>
    )
}
