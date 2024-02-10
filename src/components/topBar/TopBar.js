import React, { useState } from 'react'
import './topbar.css'

import {Link} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';

export default function TopBar() {


const menuToggle = useSelector(state => {return state})

const dispatch = useDispatch();

  const user= false;
  return (
    <div className='top'>
        <div className='topLeft'>
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-x-twitter"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
              <Link to={'/'}><li className='topListItem'>HOME</li></Link>
              <Link to={"/about"}><li className='topListItem'>ABOUT</li></Link>
              <Link to={"/contact"}><li className='topListItem'>CONTACT</li></Link>  
              <Link to={"/write"}><li className='topListItem'>WRITE</li></Link>  
            </ul>
        </div>
        <div className='topRight'>
          {
            user?(
              <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' className='topImg' alt='Image'></img>

            ):
            <ul className='topList'>
            <Link to={'/login'}><li className='topListItem'>LOGIN</li></Link> 
            <Link to={'/register'}><li className='topListItem'>REGISTER</li></Link> 
            </ul>
          }
            <Link to={'/search'}><i className="topSeachIcon fa-solid fa-magnifying-glass"></i></Link> 
            
            
             <i onClick={()=>{
              if(menuToggle === false){
                dispatch({type:"OPEN"})
              } else {
                dispatch({type:"CLOSE"})
              }
            }} 

              className="MenuMobileBtn fa-solid fa-bars"></i>
  
        </div>

    </div>
  )
}
