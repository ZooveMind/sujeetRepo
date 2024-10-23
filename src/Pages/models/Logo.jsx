import React from 'react'
import "./Logo.css"

const Logo = () => {
  return (
    <div className="logo">
      <span className="circle"></span>
      <span className="text">ZOO</span>
      <span className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
      </span>
      <span className="text">VE</span>
    </div>
  )
}

export default Logo