import React, { useState } from 'react'
import './index.scss'
import { Link } from 'react-router';
const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <ul className='nav'>
        <li className='nav-item'>
          <Link to='/'>Home</Link></li>
        <li className='nav-item'>
          <Link to='/about'>About</Link></li>
        <li className='nav-item'>
          <Link to='/services'>Services</Link></li>
        <li className='nav-item'>
          <Link to='/cart'>Cart</Link></li>
        <button className='nav-btn' onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      </ul>
    </>
  )
}

export default Navigation