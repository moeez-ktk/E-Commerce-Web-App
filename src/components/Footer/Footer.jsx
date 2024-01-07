import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import payment from '../../assets/pics/payment2.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="box-container">
        <div className="box">
            <h3>quick links</h3>
             <Link to={'/'}>home</Link>
             <Link to={'/'}>about</Link>
             <Link to={'/'}>products</Link>
             <Link to={'/'}>reviews</Link>
             <Link to={'/'}>contact</Link>
        </div>

        <div className="box">
            <h3>extra links</h3>
             <Link to={'/'}>my account</Link>
             <Link to={'/'}>my favorite</Link>
             <Link to={'/'}>my order</Link>
        </div>

        <div className="box">
            <h3>locations</h3>
             <Link to={'/'}>Pakistan</Link>
             <Link to={'/'}>United Kingdom</Link>
             <Link to={'/'}>United States</Link>
             <Link to={'/'}>UAE</Link>

        </div>

        <div className="box">
            <h3>contact info</h3>
             <Link to={'/'}>(051) 111 116 878 </Link>
             <Link to={'/'} className='email-footer'>trendify@gmail.com</Link>
             <Link to={'/'}>Rawalpindi, Pakistan</Link>
             <img src={payment} alt="" />

        </div>
      </div>

      <div className="credit">
        created by <span>the softies27</span> | all rights reserved
      </div>


    </div>
  )
}

export default Footer
