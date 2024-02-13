import React from 'react'
import vector from '../images/Vector.png'
import image1 from '../images/image10.png'
import image2 from '../images/image8.png'
import image3 from '../images/image9.png'
import vector2 from '../images/Vecto.png'

export default function hero() {
  return (
    <div className='container-hero'>
        <h1>NEW YORK’S <br /> FAVORITE ORGANIC <br /> HAMBURGER JOINT</h1>
        <div className='hero'>   
                <img  src={vector}/>
                <img  src={image1}/>
                <img  src={image2}/>
                <img  src={image3}/>
                <img  src={vector2}/>
        </div>
    </div>
  )
}
