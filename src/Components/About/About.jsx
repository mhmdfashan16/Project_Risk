import React from 'react'
import './About.css'
import about_img from '../Things/about.png'
import play_icon from '../Things/play-icon.png'


const About = () => {
  return (
    <div className='about'>
      <div className="about_left">
        <img src={about_img} className='about_img'/>
        <img src={play_icon} className='play_icon'/>

      </div>
      <div className="about_right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut deleniti expedita quidem, perferendis voluptas asperiores! Eaque qui excepturi sunt ullam a ex fugit quam maiores quo, praesentium, quasi nihil? Blanditiis!</p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem similique ea, atque tenetur accusantium totam alias quasi quo quisquam inventore repudiandae dolorum ab omnis? Cupiditate nihil obcaecati officiis sed?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore sint eos est vitae voluptate. Voluptatum tempore ipsum dicta expedita maiores. Nemo quo minima in voluptatum illo totam aliquid rerum mollitia.
        </p>


      </div>
    </div>
  )
}

export default About
