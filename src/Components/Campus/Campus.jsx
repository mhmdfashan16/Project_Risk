import React from 'react'
import './Campus.css'
import g1 from '../Things/gallery-1.png'
import g2 from '../Things/gallery-2.png'
import g3 from '../Things/gallery-3.png'
import g4 from '../Things/gallery-4.png'
import white_arrow from '../Things/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="galary">
            <img src={g1}/>
            <img src={g2}/>
            <img src={g3}/>
            <img src={g4}/>
        </div>
        <button className='btn dark_btn'>See more here<img src={white_arrow}/></button>
      
    </div>
  )
}

export default Campus
