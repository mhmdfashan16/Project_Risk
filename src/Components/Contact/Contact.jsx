import React from 'react'
import './Contact.css'
import msg_icon from '../Things/msg-icon.png'

import main_icon from '../Things/mail-icon.png'
import location_icon from '../Things/location-icon.png'
import phone_icon from '../Things/phone-icon.png'
import white_arrow from '../Things/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2f2e59ff-02e2-4efc-aee2-30e55ec56773");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    //.then((response)=>{response.json()})

    const data = await response.json();

    if (data.success) {
        console.log("Success",data)
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}
    
  return (
    <div className='contact'>
        
        <div className="contact_col">
            <h3>Send us a message<img src={msg_icon}/></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maiores, ea odio non recusandae aut quaerat ad. Voluptatibus quas animi libero? Necessitatibus, corporis voluptatibus. Dolore natus alias neque architecto sapiente.</p>
            <ul>
                <li><img src={main_icon}/>mohammedfashan16@gmail.com</li>
                <li><img src={phone_icon}/>0776854025</li>
                <li><img src={location_icon}/>Pandarawely, Chilawathurai, Mannar.</li>
            </ul>
        </div>
        <div className="contact_col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter Your Name' required/>
                <lable>Phone Number</lable>
                <input type='tel' name='phone' placeholder='Enter Your Phone Number' required/>
                <lable>Write Your Message Here</lable>
                <textarea name='message' rows="10" placeholder='Enter Your Message Here' required></textarea>
                <button type='submit' className='btn dark_btn'>Submit Now<img src={white_arrow}/></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}


export default Contact
