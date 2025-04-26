import React, { useState } from 'react'
import './index.scss'
const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <ul className='nav'>
        <li className='nav-item'>Home</li>
        <li className='nav-item'>About</li>
        <li className='nav-item'>Services</li>
        <li className='nav-item'>Cart</li>
      <button className='nav-btn' onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      </ul>
    </>
  )
}

export default Navigation