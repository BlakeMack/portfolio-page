import React from 'react'
import "./Product.css"
import logo from "../img/logo192.png"

const Product = ({img, link, name, projectName}) => {
  return (
    <>
    <div className='product-wrapper'>
      <h1 className='p-name'>{projectName}</h1>
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
    </div>
    </>

  )
}

export default Product
