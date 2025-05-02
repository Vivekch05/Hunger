import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
const Header = () => {
  return (
    <div className='flex justify-between items-center bg-white shadow-md p-2'>
    <Logo />
    <Navigation />
    </div>
  )
}

export default Header