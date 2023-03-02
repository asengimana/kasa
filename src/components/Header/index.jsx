import React from 'react'
import logo from '../../assets/logo.svg'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/" className="header__logo__link">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div className="header__navbar">
        <Navbar />
      </div>
    </div>
  )
}

export default Header
