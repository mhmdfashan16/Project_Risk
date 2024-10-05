import React from 'react'
import './Galary.css'
import g1 from '../Things/gallery-1.png'
import g2 from '../Things/gallery-2.png'
import g3 from '../Things/gallery-3.png'
import g4 from '../Things/gallery-4.png'

const Galary = () => {
  return (
    <div className='Galary'>
        
        <div className="galary_img">
            <img src={g1}/>
            <img src={g2}/>
            <img src={g3}/>
            <img src={g4}/>
        </div>
      
    </div>
  )
}

export default Galary
