import React, { useContext } from 'react'
import "./Toggle.css"
import Sun from "../img/sun.png"
import Moon from "../img/moon.png"
import { ThemeContext } from '../Context'
const Toggle = () => {
  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkMode

  const handleClick = () => {
    theme.dispatch({type: "TOGGLE"})
  }
  return (
    <div className='toggle'>
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div className="t-button" onClick={handleClick} style={{left: darkmode ? 0 : 25 }}></div>
    </div>
  )
}

export default Toggle
