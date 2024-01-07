import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = ({imgUrl,text}) => {
  return (
    <div className="cards">
            <div className="card_img">
                <img src={imgUrl} alt="pic" />
            </div>
            <div className="text">
                <Link to={'/'}>{text}</Link>
            </div>
    </div>
  )
}

export default Card
