import React from 'react'
import "./Home.css"
import Header from '../../Header/Header'
import Sidebar from '../../Sidebar/Sidebar'
import Posts from '../../Posts/Posts'

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
