import React from 'react'
import "./AboutUs.css"
import image from "../../src/assets/photo2.jpeg"
const AboutUs = () => {
    return (
        <div className='AboutUs' id="AboutUs">
            <div className="abtContainer">
                <div className='abt-text'>
                    <h1>AI-Driven Research Solutions for Earth and Space</h1>
                    <h2>Revolutionize Earth and Space Exploration with AI-Driven Hybrid Systems Based on Neuromorphic Engineering</h2>
                </div>
                <div className='imgDiv'>
                    <img src={image} alt="image" className='abt-img' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs