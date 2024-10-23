import React from 'react'
import "./Card.css"

const Card = ({ logo, title, content }) => {
    return (
        // <div className='cardContainer'>
        //     <div>
        //         {/* <img src={logo} alt="logo" /> */}
        //     </div>
        //     <div>
        //         <h2>{title}</h2>
        //         <h3>{content}</h3>
        //     </div>
        // </div>
        <div className="serviceCard">
            <div>
                <img src={logo} alt="logo" className="serviceIcon" />
            </div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Card