import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="header__navbar__links">
      <NavLink to="/" activeclassname="" className="home-page">
        Accueil
      </NavLink>
      <NavLink to="/about-us" activeclassname="">
        A propos
      </NavLink>
    </div>
  )
}

export default Navbar
