import React from 'react'
import './settings.css'
import Sidebar from '../../components/siderBar/Sidebar';

function Settings(props){
    return(
        <div className='settings'> 
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <div className='settingsUpdateTitle'>Update Your Account</div>
                    <div className='settingsDeleteTitle'>Delete Account</div>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img src='https://miro.medium.com/v2/resize:fit:720/format:webp/0*OrBSNiqm8YgoPWsV'alt='user Photo'></img>
                    <label htmlFor='fileInput'>
                        <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type='file' id='fileInput' style={{display:"none"}}/>
                    </div>

                    <label>UserName</label>
                    <input type='text' placeholder='Your name'></input>
                    <label>E-mail</label>
                    <input type='text' placeholder='yourEmail@gmail.com'></input>
                    <label>Password</label>
                    <input type='password'></input>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}


export default Settings;