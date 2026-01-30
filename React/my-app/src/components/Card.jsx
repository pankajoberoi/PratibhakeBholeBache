import React from 'react'
import '../styling/style.css'

const Card = ({name,img}) => {
    
  return (
    <div className="box">
        <h1>{name}</h1>
        <img src={img} alt="" id="image"/>
        <p>Indian cricket best batsman</p>
    </div>
  )
}

export default Card