import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'

import img from '../../images/registerbackground.jpg'

function Login(props){
    return(
        <div className='login'>
            <span className='logintitle'>Login</span>
        <form className='loginForm'>
            <label>E-mail</label>
            <input type='text' className='loginInput' placeholder='Enter your E-mail'></input>
            <label>Password</label>
            <input type='password' className='loginInput' placeholder='Enter your Password'></input>
            <button className='loginButton'>Login</button>
        </form>    
        <button className='LoginRegisterButton'>
        <Link to={'/register'}>REGISTER</Link> 
        </button>
        </div>
    )
}


export default Login;