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
        <h1 className="pl-title">React Projects</h1>
        <p className="pl-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cum error itaque optio quibusdam ad natus eveniet accusantium, odit consectetur. Ratione dolore molestias beatae ducimus minima non laboriosam, saepe libero.
        </p>
      </div>
      <div className='pl-list'>
        {productlist}
      </div>
    </div>
  )
}

export default ProductList
