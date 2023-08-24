import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className='sidebarImg' src='https://media.licdn.com/dms/image/D4D03AQErkbfgXmsddQ/profile-displayphoto-shrink_400_400/0/1665321756108?e=1697673600&v=beta&t=CkVYhnsZlea2Nn29z5LksfMsbwd2diNTjzGexYS3kSc' alt='' />
        <p>Hey this is Vivek , a third year undergraduate at IIIT Ranchi.</p>   
        <span className="sidebarTitle">Tech Stack</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Java</li>
          <li className="sidebarListItem">DSA</li>
          <li className="sidebarListItem">Javascript</li>
          <li className="sidebarListItem">React</li>
          <li className="sidebarListItem">SQL</li>
          <li className="sidebarListItem">Node</li>
        </ul>
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarsocials">
            <i className="sidebaricon fa-brands fa-facebook"></i>
            <i className="sidebaricon fa-brands fa-twitter"></i>
            <i className="sidebaricon fa-brands fa-instagram"></i>
            <i className="sidebaricon fa-brands fa-linkedin"></i>
            </div>
      </div>
      
        
      

    </div>
  )
}
