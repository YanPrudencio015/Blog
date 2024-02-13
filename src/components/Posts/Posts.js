import React,{useState} from 'react'
import './posts.css'
import Post from '../Post/Post'

import { POSTS } from '../../PostList'

export default function Posts() {

  return (
    <div className='posts'>
      {POSTS.map(post =>{
        return <Post data={post} />
      })}


    </div>
  )
}
