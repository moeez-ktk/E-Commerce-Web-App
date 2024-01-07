import React from 'react'
import './Contact.css'
import gif1 from '../../../assets/gifs/gif1.gif'
const Contact = () => {
  return (
    <div className='contact' id='contact-us'>
      <h1 className="heading"><span>contact</span>us</h1>

      <div className="row">

      <div className="image">
        <img src={gif1} alt="" />
        </div>


        <form action="">
            <input type="text" placeholder='name' className='box' />
            <input type="email" placeholder='email' className='box' />
            <input type="number" placeholder='number' className='box' />
            <textarea name="" id="" cols="30" rows="10" placeholder='message' className='box'></textarea>
            <input type="submit" value="send message" className='send-btn' />
        </form>

        
      </div>


    </div>
  )
}

export default Contact
