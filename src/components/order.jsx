import React from 'react'
import image from '../images/FullWidthImage.png'
import vector from '../images/Vectororder2.png'
function order() {
  return (
    <div className='order-container'>
      <div className='order-img-container'>
      <img src={image} alt="" />
      <div className='order-vector'>
        <img className='' src={vector} alt="" />
      </div>
      </div>
      <div className='order-text-container'>
        <h1>order online or <br/> come visit us today</h1>
        <h3 className='order-bottom'>get started</h3>
      </div>
    </div>
  )
}

export default order;