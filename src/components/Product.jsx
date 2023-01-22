import React from 'react'
import "./Product.css"
import logo from "../img/logo192.png"

const Product = ({img, link, name}) => {
  return (
    <div className='product'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className={name}/>
      </a>
    </div>
  )
}

export default Product
