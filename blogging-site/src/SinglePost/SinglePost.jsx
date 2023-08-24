import React from 'react'
import './singlePost.css'
export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' className='singlePostImg'/>
        </div>
        <h1 className='singlePostTitle'>Work-Life balance
           <div className="singlePostEdit">
           <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
             <i className="singlePostIcon fa-solid fa-trash"></i>
           </div>        
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">
                Author: <b>Vivek</b>
            </span>
            <span className="singlePostDate">1 hr ago</span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora porro sint libero omnis dignissimos, assumenda voluptatibus hic possimus, labore repellat nulla, laborum in! Nulla facere ipsum blanditiis esse officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto, unde voluptatum saepe magni vero, nisi hic inventore molestias esse voluptatem minus beatae. Adipisci voluptatum consequuntur provident, sunt obcaecati totam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto itaque temporibus id nostrum numquam ipsa nam debitis quod harum similique, ratione ex suscipit, et odit eius distinctio dolore perspiciatis omnis.</p>
    </div>
  )
}
