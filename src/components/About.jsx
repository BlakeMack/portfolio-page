import React from 'react'
import "./About.css"
import MusicImg from "../img/music.jpg"
import StageImg from "../img/stage.jpg"
import CodeImg from "../img/code.jpg"
import FilmImg from "../img/film.jpg"
import ReactLogo from "../img/logo192.png"
import JavaLogo from "../img/java.png"
import PythonLogo from "../img/python.png"
// import CssLogo from "../img/css.png"
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
        I am a detail-oriented, driven Software Engineer based in London, with 1 years experience training as a software developer. I like solving problems, and providing digital solutions.
        My demonstrable commitment to continuous learning, and abilities as a written and verbal communicator, make me a great candidate for junior and entry level software development roles.
        In addition to software development, I am also interested by film, theatre and music production. What excities me most about these fields is the intersection between creativity and problem solving required. <br></br> <br></br>
        Current Tech stack: React, Javascript(ES6), Ruby on Rails, Java, Python, Git
        </p>
        <div className='a-award-container'>
          <div className="a-award">
            <img src={ReactLogo} alt="" className="a-award-img" />
          </div>
          <div className="a-award">
            <img src={RailsLogo} alt="" className="a-award-img" />
          </div>
          <div className="a-award">
            <img src={JavaLogo} alt="" className="a-award-img" />
          </div>
          <div className="a-award">
            <img src={PythonLogo} alt="" className="a-award-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
