import React from 'react'
import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/siderBar/Sidebar'

export default function Home() {
  return (
    <>
      <Header/>
    <div className='home'>
    <Posts/>
    <Sidebar/>
    </div>
    </>
  )
}
