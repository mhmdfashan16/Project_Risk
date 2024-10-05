import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import './App.css'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Galary from './Components/Galary/Galary'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      
      <div className="container">
        <Title subTitle='our programe' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Galary' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonial' title='What Students Says'/>
      <Testimonial/>
      <Title subTitle='Contact us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App

