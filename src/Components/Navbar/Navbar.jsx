import React, { useEffect, useState } from 'react';
import './Navbar.css'
import logo from '../Things/logo.png'
import Com_Logo from '../Things/Asset/Com_Logo.png'
import { Link, ScrollLink } from 'react-scroll';

// import logo from './assets/logo.png';


const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <nav className={`container ${sticky ? 'dark_nav' : ''}`}>
      <img className='navbar_logo' src={Com_Logo} />

      {/* <ul className='navbar_menu'>
        <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='Program' smooth={true} offset={0} duration={500}>Program</Link></li>
        <li><Link to='About' smooth={true} offset={0} duration={500}>About us</Link></li>
        <li><Link to='Campus' smooth={true} offset={0} duration={500}>Campus</Link></li>
        <li><Link to='Testimonial' smooth={true} offset={0} duration={500}>Testimonias</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact us</Link></li>
      </ul > */}



      <ul className='navbar_menu'>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonias</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav >

  )
}

export default Navbar