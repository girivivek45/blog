import React from 'react'
import './Post.css'
export default function Post() {
  return (
    <div className='post'>
        <img className='postimg' src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt='' />
      <div className="postInfo">
        <div className="postcate">
            <span className="postcat">Music</span>
            <span className="postcat">Life</span>
        </div>
        <span className="postTilte">DSA v DEV</span>
        <hr/>
        <span className="postDate">1 hr ago</span>
      </div>
      <p className='postdesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus voluptas adipisci provident excepturi et dolorem reprehenderit. Omnis accusamus laborum, nisi est nihil doloremque nostrum veniam, cupiditate beatae ipsa maiores?
      </p>
    </div>
  )
}
