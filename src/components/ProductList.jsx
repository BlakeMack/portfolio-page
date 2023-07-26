import React from 'react'
import "./ProductList.css"
import Product from './Product'
import { products } from '../data'
import { ScrollClass } from '../utils/scroll-class'

const ProductList = () => {

  const productlist = products.map((item) => (
    <Product key={item.id} img={item.img} link={item.link} name={ScrollClass(item.id)} projectName={item.projectName}/>
  ))
  return (
    <div className='plist'>
      <div className="pl-text">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          Click on any of the project images below to be taken to its page.
        </p>
      </div>
      <div className='pl-list'>
        {productlist}
      </div>
    </div>
  )
}

export default ProductList
