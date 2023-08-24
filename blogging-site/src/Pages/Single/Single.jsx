import React from 'react'
import './Single.css'
import Sidebar from "../../Sidebar/Sidebar"
import SinglePost from '../../SinglePost/SinglePost'
export default function Single() {
  return (
    <div className='single'>
        {/*post*/}
        <SinglePost/>
        <Sidebar/>
        </div>
  )
}
