import React from 'react'
import './header.css'

import imgBackground from '../../images/background.jpg'
export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <div className='headerTitleSm'>React</div>
        <div className='headerTitleLg'>Blog</div>
      </div>
      <img 
      className='headerImg'
      src={imgBackground} 
      alt=''>
      </img>
    </div>
  )
}
