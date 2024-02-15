import React from 'react'

import image from '../../images/writeBackground.jpg'
import './write.css'

export default function Write(props) {
  return (
    <div className='write'>
      <img src={image}
      className='writeImg'>
      </img>
      <form className='writeForm'>
        <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
                <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type='file' id='fileInput' style={{display:"none"}}></input>
            <input type='text' placeholder='Title' className='writeInput' autoFocus={true}></input>
        </div>
        <div className='writeFormGroup'>
          <textarea type="text" placeholder='Tell your history' className='writeInput writeText'></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}
