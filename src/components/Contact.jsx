import React, { useRef, useState, useContext } from 'react'
import "./Contact.css"
import Phone from "../img/phone-icon.png"
import Email from "../img/email-icon.png"
import Location from "../img/location-icon.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../Context'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6ly1049',
    'template_rciodyj',
    formRef.current,
    'jA1AQ3JyFCSVYs7pQ')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className='contact'>
      <div className='c-bg'></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Contact me</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                <h1>+447477673208</h1>
              </div>
              <div className="c-info-item">
                <img src={Email} alt="" className="c-icon" />
                <h1>blakemckenzie365@gmail.com</h1>
              </div>
              <div className="c-info-item">
                <img src={Location} alt="" className="c-icon" />
                <h1>95 Chinbrook Rd, Grove Park, London, SE12 9QL</h1>
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
            For any enquiries or freelance opportunities, please get in touch via the form below.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor: darkmode && "#333"}} type="text" placeholder="Name" name="user_name" />
              <input style={{backgroundColor: darkmode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
              <input style={{backgroundColor: darkmode && "#333"}} type="text" placeholder="Email" name="user_email" />
              <textarea name="message" placeholder="Message" id="" cols="30" rows="10" style={{backgroundColor: darkmode && "#222"}}></textarea>
              <button>Submit</button>
              {done && "Thank you..."}
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact
