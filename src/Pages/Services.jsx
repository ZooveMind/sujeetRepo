import React from 'react'
import "./Services.css"
import image from "../assets/photo3.jpeg"
import logo1 from "../assets/logo1.jpeg"
import logo2 from "../assets/logo2.webp"
import logo3 from "../assets/logo3.png"
import Card from './models/Card'
const Services = () => {
    const servicesData = [
        {
            logo: logo1,
            title: "AI-Enhanced Spacecraft",
            content: "Elevate space exploration with AI-enhanced spacecraft, pushing the boundaries of technology and discovery."
        },
        {
            logo: logo2,
            title: "Neuromorphic Data Analysis",
            content: "Uncover new frontiers with neuromorphic data analysis, revolutionizing the way we process and understand space data."
        },
        {
            logo: logo3,
            title: "Hybrid Exploration Systems",
            content: "Experience the next level of exploration with hybrid systems, seamlessly integrating cutting-edge technology for unparalleled space missions."
        },
    ]
    return (
        <div className='serviceContainer' id="Services">
            <img src={image} alt="image" className='serviceContainerBgImg' />
            <div className='serviceBlackDrop'></div>
            <div className='seriviesContentContainer'>
                <div className='servicesHeading'>
                    <h1>Our Services</h1>
                    <h3>Innovative Hybrid Systems for Earth and Space Research Using Neuromorphic Engineering and AI</h3>
                </div>
                <div className='ServicesContent'>
                    {
                        servicesData.map((ele) => {
                            return(
                            <Card key={ele.content} logo={ele.logo} title={ele.title} content={ele.content}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services