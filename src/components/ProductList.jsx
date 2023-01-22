import React from 'react'
import "./ProductList.css"
import Product from './Product'
import { products } from '../data'

const ProductList = () => {

  const productlist = products.map((item) => (
    <Product key={item.id} img={item.img} link={item.link}/>
  ))
  return (
    <div className='plist'>
      <div className="pl-text">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          Click on any of the project images below to be taken to its page. The frontend projects below were built with react, react-router-dom, react context, aswell as the OTDB and OPENAI API.
        </p>
      </div>
      <div className='pl-list'>
        {productlist}
      </div>
    </div>
  )
}

export default ProductList
