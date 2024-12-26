import React from 'react'
import './Hero.css'
import left_arrow from '../Things/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero_text">
        <h1 className='hero_title'>Welcome to Commerce World College</h1>
        <h4>The Place where Accountant are Made</h4>
        <br />
        <h2>We Ensure Better Education for Better World</h2>
        <p>
          At Commerce World College, we are dedicated to nurturing the next generation of accountants and business leaders.
          Our innovative programs, experienced faculty, and state-of-the-art facilities empower students to excel in their careers and contribute to a brighter future.
          Join us to embark on a journey of excellence, integrity, and lifelong learning.
        </p>

        <button className='btn'>Explore more <img src={left_arrow} /></button>
      </div>

    </div>
  )
}

export default Hero
