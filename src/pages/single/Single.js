import React from 'react'
import './single.css'
import Sidebar from '../../components/siderBar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'

import Post from '../../components/Post/Post'
function Single(props){
    return(
            <div className='single'>
                <SinglePost data={Post}/>
                <Sidebar/>
            </div>
    )
}


export default Single