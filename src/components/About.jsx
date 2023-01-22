import React from 'react'
import "./About.css"
import MusicImg from "../img/music.jpg"
import StageImg from "../img/stage.jpg"
import CodeImg from "../img/code.jpg"
import FilmImg from "../img/film.jpg"
import ReactLogo from "../img/logo192.png"
import JsLogo from "../img/javascript-logo.png"
import CssLogo from "../img/css.png"
import RailsLogo from "../img/rails.png"
import HtmlLogo from "../img/html.png"

function About() {
  return (
    <div className='about'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={MusicImg} alt="" />
          <img src={StageImg} alt="" />
          <img src={CodeImg} alt="" />
          <img src={FilmImg} alt="" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        {/* <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur
        </p> */}
        <p className="a-desc">
        Web development graduate and teaching assistant, currently looking for full time roles to implement my acquired skills on real world projects and progress further as a developer, while contributing positively to an organisation.
        I have many creative interests such as music production, audio editing, and a love for film and stage. Going forward I hope to find more ways to integrate these interests into my personal projects. <br></br> <br></br>
        Current Tech stack: React, Javascript(ES6), Ruby on Rails, Ruby, HTML, CSS, Git
        </p>
        <div className='a-award-container'>
          <div className="a-award">
            <img src={ReactLogo} alt="" className="a-award-img" />
          </div>
          <div className="a-award">
            <img src={RailsLogo} alt="" className="a-award-img" />
          </div>
          <div className="a-award">
            <img src={JsLogo} alt="" className="a-award-img" />
          </div>
          <div className="a-award">
            <img src={HtmlLogo} alt="" className="a-award-img" />
          </div>
          <div className="a-award">
            <img src={CssLogo} alt="" className="a-award-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
