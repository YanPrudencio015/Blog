import React, { useState } from "react";
import './search.css'
import { Link } from "react-router-dom";
import { SUBJECTS, COLORS } from "../../Subjects";

function Search(props){

    const [currentIndex, setCurrentIndex] = useState(0)


    console.log(currentIndex)
    return(
        <div className="search">
            <form>
                <input type="text" placeholder="search"/>
                <button type="submit"><i class=" fa-solid fa-magnifying-glass"></i></button>
                
            </form>
            <div className="recommendedSubjects">
                <h1>Main Subjects</h1>
                <div className="subjectsContainer">
                    {SUBJECTS.map(subjects =>{ 
                        return (
                        <button className="subjectBtn"
                        onMouseOver={(e)=> {
                            e.target.style.background = `#${COLORS[currentIndex]}`;
                            e.target.style.transition = "400ms";
                            e.target.style.color = "#fff"}} 


                        onMouseLeave={(e) => {
                            setCurrentIndex(prevIndex => (prevIndex + 1) % COLORS.length);
                            e.target.style.background = "#fff";
                            e.target.style.color = "#000";
                            e.target.style.transition = "100ms";
                        }}
                        
    

                        >{subjects}</button>
                        
                        )})}
                </div>
            </div>
            <Link to={"/"} className="searchCloseIcon"><i className="fa-solid fa-x"></i></Link> 
        </div>

    )
}


export default Search;