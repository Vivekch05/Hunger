import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../utils/userContext';
import OnlineStatus from './OnlineStatus';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const data = useContext(UserContext);
  console.log(data, "data")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItem = useSelector((store)=>store.cart.items);
  return (
    <>
      <ul className='flex justify-between align-center list-none'>
        <li className='text-lg font-bold p-2 m-1'>
          <Link to='/'>Home</Link></li>
        <li className='text-lg font-bold p-2 m-1'>
          <Link to='/about'>About</Link></li>
        <li className='text-lg font-bold p-2 m-1'>
          <Link to='/contactus'>ContactUs</Link></li>
        <li className='text-lg font-bold p-2 m-1'>
          <Link to='/cart'>Cart ({cartItem.length} items)</Link></li>
        <li className='flex items-center p-2 m-1'>
          <OnlineStatus />
        </li>
        <button 
          className={`relative overflow-hidden group px-8 py-2.5 rounded-xl font-semibold text-white transition-all duration-300 ease-in-out
            ${isLoggedIn 
              ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
              : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700'
            }
            shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-amber-200`}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          <span className="relative z-10">
            {isLoggedIn ? 'Logout' : 'Login'}
          </span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </button>
      </ul>
    </>
  )
}

export default Navigation