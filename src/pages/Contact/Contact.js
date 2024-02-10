import React from 'react'

import './contact.css'
export default function contact() {
  return (
    <div className='contact'>
        <h1 style={{textTransform:"uppercase"}}>Contact Us</h1>
        <form className='contactForm'>
            <input type='text' placeholder='Subject'/>
            <textarea type='text' placeholder='Message'/>
            <button className='contactBtn'>submit</button>
        </form>
      </div>
  )
}
