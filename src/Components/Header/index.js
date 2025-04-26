import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import './index.scss'
const Header = () => {
  return (
    <div className='header'>
    <Logo />
    <Navigation />
    </div>
  )
}

export default Header