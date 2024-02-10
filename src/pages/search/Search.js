import React from "react";
import './search.css'
import { Link } from "react-router-dom";


function Search(props){
    return(
        <div className="search">
            <form>
                <input type="text" placeholder="search"/>
                <button type="submit"><i class=" searchIcon fa-solid fa-magnifying-glass"></i></button>
                
            </form>
            <div className="recommendedSubjects">
                <h1>Main Subjects</h1>
                <div className="subjectsContainer">
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>
                <button>Subjects</button>



                </div>
            </div>
            <Link to={"/"} className="searchCloseIcon"><i className=" fa-solid fa-x"></i></Link> 
        </div>

    )
}


export default Search;