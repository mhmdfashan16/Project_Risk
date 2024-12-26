import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../Things/next-icon.png'
import back_icon from '../Things/back-icon.png'
import user_1 from '../Things/user-1.png'
import user_2 from '../Things/user-2.png'
import user_3 from '../Things/user-3.png'
import user_4 from '../Things/user-4.png'
import fshn from '../Things/Asset/fshn.jpg'

const Testimonial = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx>-50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx +=25;
            
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonial'>
        <img src={next_icon} alt="" className='next_btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back_btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user_info">
                            <img src={fshn} alt="" />
                            <div>
                                <h3>Mohammed Fashan</h3>
                                <span>Commerce World, Mannar</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum doloremque aperiam sapiente quasi soluta illo voluptatibus numquam nostrum officiis ipsam nulla eius laboriosam quis impedit, excepturi nemo! Quisquam, est nihil.</p>

                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user_info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Williams Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum doloremque aperiam sapiente quasi soluta illo voluptatibus numquam nostrum officiis ipsam nulla eius laboriosam quis impedit, excepturi nemo! Quisquam, est nihil.</p>
                        
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user_info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Williams Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum doloremque aperiam sapiente quasi soluta illo voluptatibus numquam nostrum officiis ipsam nulla eius laboriosam quis impedit, excepturi nemo! Quisquam, est nihil.</p>
                        
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user_info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Williams Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum doloremque aperiam sapiente quasi soluta illo voluptatibus numquam nostrum officiis ipsam nulla eius laboriosam quis impedit, excepturi nemo! Quisquam, est nihil.</p>
                        
                    </div>
                </li>
            </ul>

        </div>
        
      
    </div>
  )
}

export default Testimonial
