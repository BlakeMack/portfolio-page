import React from 'react'
import "./Contact.css"
import Phone from "../img/phone-icon.png"
import Email from "../img/email-icon.png"
import Location from "../img/location-icon.png"

const Contact = () => {
  return (
    <div className='contact'>
      <div className='c-bg'>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Contact me</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                <h1>+4474776732..</h1>
              </div>
              <div className="c-info-item">
                <img src={Email} alt="" className="c-icon" />
                <h1>blakemckenzie365@gmail.com</h1>
              </div>
              <div className="c-info-item">
                <img src={Location} alt="" className="c-icon" />
                <h1>Grove Park, SE12 ..</h1>
              </div>
            </div>
          </div>
          <div className="c-right"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact
