import React from 'react'
import './Settings.css'
import Sidebar from "../../Sidebar/Sidebar"

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your account</span>
                <span className="settingsDeleteTitle">Delete your account</span>
            </div>
            <form  className="settingsForm">
                <label className='labelContent'>Profile Picture</label>
                <div className="settingsPP">
                    <img src='https://media.licdn.com/dms/image/D4D03AQErkbfgXmsddQ/profile-displayphoto-shrink_400_400/0/1665321756108?e=1697673600&v=beta&t=CkVYhnsZlea2Nn29z5LksfMsbwd2diNTjzGexYS3kSc' alt='' />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: "none"}} />
                </div>
                <label className='labelContent'>Username</label>
                <input type='text' placeholder='Vivek' />
                <label className='labelContent'>E-mail</label>
                <input type='email' placeholder='vivek.giri@gmail.com' />
                <label className='labelContent'>Password</label>
                <input type='password'/>
                <button className="settingsSubmit">Update</button>
            </form>

        </div>
        <Sidebar/>
    </div>
  )
}
