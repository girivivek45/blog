import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
function Navbar(){

    const user = false;
     return (
        <div className='top'>
            <div className='topLeft'>
            <i className="icon fa-brands fa-facebook"></i>
            <i className="icon fa-brands fa-twitter"></i>
            <i className="icon fa-brands fa-instagram"></i>
            <i className="icon fa-brands fa-linkedin"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'><Link className="link"  to={`/`}>HOME</Link></li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'><Link className="link"  to={`write`}>WRITE</Link></li>
                    <li className='topListItem'>
                        {user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className='topRight'>
                {user ? <img className='topImage' src='https://media.licdn.com/dms/image/D4D03AQErkbfgXmsddQ/profile-displayphoto-shrink_400_400/0/1665321756108?e=1697673600&v=beta&t=CkVYhnsZlea2Nn29z5LksfMsbwd2diNTjzGexYS3kSc'
                alt=''
                /> : (
                    <ul className='topList'>
                        <li className='topListItem'><Link className='link' to="/login">
                            LOGIN
                        </Link></li>
                        <li className='topListItem'><Link className='link' to="/register">
                            REGISTER
                        </Link>

                        </li>
                        
                    </ul>
                )}
                


                <i className="topSearch fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
     )
}
export default Navbar;