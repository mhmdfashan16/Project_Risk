import React from 'react'
import './Programs.css'
import program_1 from '../Things/program-1.png'
import program_2 from '../Things/program-2.png'
import program_3 from '../Things/program-3.png'

import program_icon_1 from '../Things/program-icon-1.png'
import program_icon_2 from '../Things/program-icon-2.png'
import program_icon_ from '../Things/program-icon-3.png'


const Programs = () => {
  return (
    <div className='programs' name='program'>
        {/* <div className='program_head'>
            <p>OUR PROGRAM</p>
            <h1>What we Offer</h1>
        </div> */}
        <div className="program">
            <img src={program_1}/>
            <div className="caption">
                <img src={program_icon_1}/>
                <p>Graduation Degree</p>
            </div>
                   
        </div>
        <div className="program">
            <img src={program_2}/>
            <div className="caption">
                <img src={program_icon_1}/>
                <p>Master Degree Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3}/>
            <div className="caption">
                <img src={program_icon_1}/>
                <p>PostGraduation</p>
            </div>
        </div>  
      
    </div>
  )
}

export default Programs
