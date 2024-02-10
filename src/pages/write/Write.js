import React from 'react'

import './write.css'

export default function Write(props) {
  return (
    <div className='write'>
      <img src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*A7jWykAKQTY1QH6AMJK_HA.jpeg' 
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
