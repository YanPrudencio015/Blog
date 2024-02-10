import React from "react";

import { Link } from "react-router-dom";

import './about.css'

function About(props){
    return(
        <div className="about">
            <div className="aboutNavbar">
              <Link to={"/"}><h1>BLOG REACT </h1></Link>  
            </div>
            <div className="aboutBody">
                <div className="aboutBodyTextContainer">
                    <div className="aboutBodyTextTitle">Tell Your Story</div>
                    <div className="aboutBodyText">
                        Contrary to popular belief, 
                        Lorem Ipsum is not simply random 
                        text. It has roots in a piece of 
                        classical Latin literature from 
                        45 BC, making it over 2000 years old. 
                        Richard McClintock, a Latin professor 
                        at Hampden-Sydney College in Virginia, 
                        looked up one of the more obscure Latin 
                        words, consectetur, from a Lorem Ipsum 
                        passage, and going through the cites of 
                        the word in classical literature, 
                        discovered the undoubtable source. 
                        Lorem Ipsum comes from sections 
                        1.10.32 and 1.10.33 of "de Finibus 
                        Bonorum et Malorum" 
                        (The Extremes of Good and Evil) by Cicero, 
                        written in 45 BC. This book is a treatise 
                        on the theory of ethics, very popular during 
                        the Renaissance. The first line of Lorem Ipsum, 
                        "Lorem ipsum dolor sit amet..", 
                        comes from a line in section 1.10.32.
                    </div>
                </div>
            </div>
                <div className="aboutUserOptionsContainer">
                    <div className="aboutuserOptions">
                        <Link to={"/post/:postId"}> <h1>start reading</h1></Link></div>
                    <div className="aboutuserOptions">
                        <Link to={"/write"}><h1>start writing</h1></Link></div>
                </div>
                <div className="aboutUserAccount">
                   <Link to={'/login'} ><button>Login</button></Link>
                   <Link to={'/register'} ><button>Register</button></Link>
                </div>
        </div>
    )
}


export default About;