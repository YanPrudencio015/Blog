import React from 'react'
import './register.css'
import {Link} from 'react-router-dom'

function Register(props){
    return(
        <div className='register'>
            <span className='registerTitle'>Register</span>
        <form className='registerForm'>
            <label>UserName</label>
            <input type='text' className='registerInput' placeholder='Enter your Name'></input>
            <label>E-mail</label>
            <input type='text' className='registerInput' placeholder='Enter your E-mail'></input>
            <label>Password</label>
            <input type='text' className='registerInput' placeholder='Enter your Password'></input>
            <button className='registerButton'>Register</button>
        </form>    
        <button className='registerLoginButton'>
        <Link to={'/login'}>LOGIN</Link> 
        </button>
        </div>
    )
}


export default Register;