import React from 'react'
import './Hero.css'
import left_arrow from '../Things/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero_text">
        <h1 className='hero_title'>Welcome to Commerce World College</h1>
        <h2>We Ensure Better Education for Better World</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur amet obcaecati a deleniti asperiores earum eos, ad vitae commodi beatae dignissimos sint incidunt consequuntur ab. Dolore voluptatem repellat voluptatibus quae?
        </p>
        <button className='btn'>Explore more <img src={left_arrow} /></button>
      </div>

    </div>
  )
}

export default Hero
