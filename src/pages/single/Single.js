import React from 'react'
import './single.css'
import Sidebar from '../../components/siderBar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
function Single(props){
    return(
            <div className='single'>
                <SinglePost/>
                <Sidebar/>
            </div>
    )
}


export default Single