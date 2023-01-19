import React from 'react'
import "./About.css"
import MusicImg from "../img/music.jpg"
import SmallLogo from "../img/logo192.png"

function About() {
  return (
    <div className='about'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={MusicImg} alt="" className="a-img"/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <p className="a-desc">
        Web development graduate and teaching assistant, currently looking for full time roles to implement my acquired skills on real world projects and progress further as a developer, while contributing positively to an organisation.
        Current Tech stack: React, Javascript(ES6), Ruby on Rails, Ruby, HTML, CSS, Git, Heroku
        </p>
        <div className="a-award">
          <img src={SmallLogo} alt="" className="a-award-img" />
          <div className="a-award-text">
            Lorem ipsum dolor sit amet consectetur
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
