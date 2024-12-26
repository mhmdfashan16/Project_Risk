import { Link } from 'react-scroll';
import React, { useEffect, useState } from 'react';
import './Navbar.css'
import logo from '../Things/logo.png'
import Com_Logo from '../Things/Asset/Com_Logo.png'

// import logo from './assets/logo.png';


const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <nav className={`container ${sticky? 'dark_nav':''}`}>
      <img className='navbar_logo' src={Com_Logo}/>
      
  

      <ul className='navbar_menu'>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Courses</Link></li>
        <li><Link to='about' smooth={true} offset={-190} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-270} duration={500}>Institute</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-280} duration={500}>Testimonias</Link></li>
        <li><Link to='contact' smooth={true} offset={-270} duration={500} className='btn'>Contact us</Link></li>
      </ul>
    </nav >

  )
}

export default Navbar