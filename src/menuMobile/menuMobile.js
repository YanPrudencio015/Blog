import React from "react";

import './menuMobile.css';
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';



function MenuMobile(props){
    const dispatch = useDispatch()
    const menuToggle = useSelector((state)=>{ return state})
    

    return (
        menuToggle === true ?
        <div className="menuMobile">
            <div className="menuMobileContainer">
                <div className="menuMobileUserOptions">
                   <Link to={"/login"} onClick={()=>{dispatch({type:"CLOSE"})}}>
                    <i className="mobileUserIcon fa-solid fa-user"></i>
                    </Link> 
                    
                    
                    <Link to={"/search"} onClick={()=>dispatch({type:"CLOSE"})}>
                        <button className="searchIcon">Search</button>
                    </Link>
                </div>
                <div className="menuMobileOptions">
                   <Link to={"/"} onClick={()=>{dispatch({type:"CLOSE"})}}><p>home</p></Link> 
                   <Link to={"/about"} onClick={()=>{dispatch({type:"CLOSE"})}}><p>about</p></Link> 
                   <Link to={"/contact"} onClick={()=>{dispatch({type:"CLOSE"})}}><p>contact</p></Link> 
                   <Link to={"/write"} onClick={()=>{dispatch({type:"CLOSE"})}}><p>write</p></Link> 
                </div>
            </div>
        </div>

        : 
        <div className="menuMobile close">
        <div className="menuMobileContainer menuMobileContainerClose">
            <div className="menuMobileUserOptions">
                <i className="mobileUserIcon fa-solid fa-user"></i>
            </div>
            <div className="menuMobileOptions ">
               <Link to={"/home"}><p>home</p></Link> 
               <Link to={"/about"}><p>about</p></Link> 
               <Link to={"/about"}><p>contact</p></Link> 
               <Link to={"/write"}><p>write</p></Link> 
            </div>
        </div>
    </div>
    )
}



export default MenuMobile