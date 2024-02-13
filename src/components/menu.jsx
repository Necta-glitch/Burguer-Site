import React from 'react'
import menu1 from '../images/Rectangle17.png'
import menu2 from '../images/Rectangle16.png'
export default function menu() {
  return (
    <div className='menu'>
        <div className='menu-container'>
            <div className='img-container1'>
                <img src={menu1} alt="burguer" />
                <div className='text-container'>
                  <h2>salt & Vinegar <br/> french fries</h2>
                  <h3>order online</h3>
                </div>
            </div>
            <div className='img-container2'>
                <img src={menu2} alt="burguer1" />
                <div className='text-container'>
                  <h2>crispy chicken<br/> sandwich</h2>
                  <h3>order online</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
