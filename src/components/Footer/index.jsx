import React from 'react'
import logo from '../../assets/logo-footer.svg'

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="logo" className="footer__logo" />
      <p className="footer__text">© 2023 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
