import React from 'react'
import './Products.css'
import img1 from '../../../assets/pics/slider2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faShare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <div className='products' id='products'>
      <h1 className='heading'>latest<span>products</span></h1>


     <div className="box_container">
        <div className="box">
            <span className="discount">-10%</span>
            <div className="image">
                <img src={img1} alt="" />
                <div className="icons">
                    <Link to={'/'}><FontAwesomeIcon icon={faHeart}/></Link>
                    <Link to={'/'} className='cart-btn'>add to cart</Link>
                </div>
            </div>

            <div className="content">
                <h3>dress 1</h3>
                <div className="price">$15.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-10%</span>
            <div className="image">
                <img src={img1} alt="" />
                <div className="icons">
                    <Link to={'/'}><FontAwesomeIcon icon={faHeart}/></Link>
                    <Link to={'/'} className='cart-btn'>add to cart</Link>
                </div>
            </div>

            <div className="content">
                <h3>dress 1</h3>
                <div className="price">$15.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-10%</span>
            <div className="image">
                <img src={img1} alt="" />
                <div className="icons">
                    <Link to={'/'}><FontAwesomeIcon icon={faHeart}/></Link>
                    <Link to={'/'} className='cart-btn'>add to cart</Link>
                </div>
            </div>

            <div className="content">
                <h3>dress 1</h3>
                <div className="price">$15.99 <span>$15.99</span></div>
            </div>
        </div>
        <div className="box">
            <span className="discount">-10%</span>
            <div className="image">
                <img src={img1} alt="" />
                <div className="icons">
                    <Link to={'/'}><FontAwesomeIcon icon={faHeart}/></Link>
                    <Link to={'/'} className='cart-btn'>add to cart</Link>
                </div>
            </div>

            <div className="content">
                <h3>dress 1</h3>
                <div className="price">$15.99 <span>$15.99</span></div>
            </div>
        </div>


        <div className="box">
            <span className="discount">-10%</span>
            <div className="image">
                <img src={img1} alt="" />
                <div className="icons">
                    <Link to={'/'}><FontAwesomeIcon icon={faHeart}/></Link>
                    <Link to={'/'} className='cart-btn'>add to cart</Link>
                </div>
            </div>

            <div className="content">
                <h3>dress 1</h3>
                <div className="price">$15.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-10%</span>
            <div className="image">
                <img src={img1} alt="" />
                <div className="icons">
                    <Link to={'/'}><FontAwesomeIcon icon={faHeart}/></Link>
                    <Link to={'/'} className='cart-btn'>add to cart</Link>
                </div>
            </div>

            <div className="content">
                <h3>dress 1</h3>
                <div className="price">$15.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-10%</span>
            <div className="image">
                <img src={img1} alt="" />
                <div className="icons">
                    <Link to={'/'}><FontAwesomeIcon icon={faHeart}/></Link>
                    <Link to={'/'} className='cart-btn'>add to cart</Link>
                </div>
            </div>

            <div className="content">
                <h3>dress 1</h3>
                <div className="price">$15.99 <span>$15.99</span></div>
            </div>
        </div>

       


        <div className="box">
            <span className="discount">-10%</span>
            <div className="image">
                <img src={img1} alt="" />
                <div className="icons">
                    <Link to={'/'}><FontAwesomeIcon icon={faHeart}/></Link>
                    <Link to={'/'} className='cart-btn'>add to cart</Link>
                </div>
            </div>

            <div className="content">
                <h3>dress 1</h3>
                <div className="price">$15.99 <span>$15.99</span></div>
            </div>
        </div>


      

     </div>

    </div>
  )
}

export default Products
