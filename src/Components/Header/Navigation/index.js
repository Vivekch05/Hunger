import React, { useState } from 'react'
import { Link } from 'react-router';
const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <ul className='flex justify-between align-center list-none '>
        {/* <li className='nav-item'>
          Status <OnlineStatus /></li> */}
        <li className='text-lg font-bold p-2 m-1'>
          <Link to='/'>Home</Link></li>
        <li className='text-lg font-bold p-2 m-1'>
          <Link to='/about'>About</Link></li>
        <li className='text-lg font-bold p-2 m-1'>
          <Link to='/services'>Services</Link></li>
        <li className='text-lg font-bold p-2 m-1'>
          <Link to='/cart'>Cart</Link></li>
        <button className='text-base rounded-lg font-bold p-3 m-1 bg-blue-600 text-white' onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      </ul>
    </>
  )
}

export default Navigation