import React from 'react'

function footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='sections-container'>
          <div>
            <h1>burguer <br /> heaven</h1>
          </div>
          <div className='section-1'>
            <h2>More</h2>
            <ul>
              <li>About</li>
              <li>Menu</li>
              <li>Locations</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className='section-2'>
          <h2>Hours</h2>
            <ul>
              <li>Open from</li>
              <li>11AM to</li>
              <li>11PM daily</li>
            </ul>
          </div>
          <div>
            <h2>join our newsletter</h2>
            <form>
              <input className='input-text' type='text' placeholder='SUBMIT' />
              </form>
          </div>
        </div>
        <div className='permises'>
          <h3 className='copyright'>Copyright Burger Heaven</h3>
          <h3 className='privacy'>Privacy Policy</h3>
        </div>
      </div>
    </div>
  )
}

export default footer