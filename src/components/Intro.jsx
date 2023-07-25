import React from 'react'
import Logo from "../img/logo512.png"
import "./intro.css"
import { ThemeContext } from '../Context'
import { useContext } from 'react'

const Intro = () => {
  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkMode
  return (
    <div className='intro'>
      <div className="intro-left">
        <div className="i-left-wrapper">
            <h1 className='i-name'>Blake McKenzie</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Freelance Developer</div>
                <div className="i-title-item">Content Writer</div>
                <div className="i-title-item">Film Buff</div>
                <div className="i-title-item">Content Writer</div>
              </div>
            </div>
            <div className="i-desc">
              I am a London based Software Engineer with a passion for building modern web products and user interfaces, and acquiring new skills and technologies.
            </div>
          </div>
        </div>
      <div className="intro-right">
        <div className="i-bg"></div>
        <img src={Logo} alt="could not load picture" className='i-img'/>
      </div>
    </div>
  )
}

export default Intro
