import React from 'react'
import './Navbar.css'
import { Link as ScrollLink,animateScroll as scroll } from 'react-scroll'


import { faHeart,faShoppingCart,faUser,faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef,useState } from 'react'
const _Navbar = () => {




  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);



  const showNavBar=()=>{

    navRef.current.classList.toggle("responsive_nav")

  }

  const closeNavBar = () => {
    setIsNavOpen(false);
  };

  const handleNavLinkClick = () => {
    closeNavBar();
  };

  return (
    <header>


    <input type="checkbox" name='' id='toggler'
    />
    <label htmlFor="toggler" className='bars'><FontAwesomeIcon icon={faBars} onClick={showNavBar}/></label>


         <ScrollLink to='/' className='logo'>Trendify<span>.</span></ScrollLink>


          
          <nav className='navbar' ref={navRef}>
              <ScrollLink to="home" onClick={showNavBar}>home</ScrollLink>
              <ScrollLink to="about" onClick={showNavBar}>about</ScrollLink>
              <ScrollLink to="products" onClick={showNavBar}>products</ScrollLink>
              <ScrollLink to="reviews" onClick={showNavBar}>reviews</ScrollLink>
              <ScrollLink to="contact-us" onClick={showNavBar}>contact</ScrollLink>
              <FontAwesomeIcon className="nav-btn nav-close-btn" icon={faTimes} onClick={showNavBar}/>
          </nav>

          <div className="icons">
          <ScrollLink to="/"><FontAwesomeIcon icon={faHeart}/></ScrollLink>
          <ScrollLink to="/" className='cart'><span className='count'>1</span><FontAwesomeIcon icon={faShoppingCart} className='icon-cart'/></ScrollLink>
            
           <ScrollLink to="/"><FontAwesomeIcon icon={faUser}/></ScrollLink>
          </div>

    </header>
  )
}

export default _Navbar
