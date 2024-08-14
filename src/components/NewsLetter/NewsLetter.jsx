import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Receive Exclusive offers via Email</h1>
        <p>Subscribe and Stay Updated</p>
        <div>
          <input type="email" placeholder='Your Email ID' name='email' />
          <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter