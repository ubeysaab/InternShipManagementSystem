import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from "../assets/6hqVTb-LogoMakr.png"
function Navbar() {
  return (
    <nav  className='navbar glass' >
      <div className='navbar__logo'>
          <img src={logoImg} alt=""  className=''/>
      </div>
      <div className='navbar__list'>
        <ul>
          <Link to="/login">
            Login
          </Link>
        </ul>
        <ul>
          <Link to="/register">
             Register
          </Link>
        </ul>
        {/* TODO SILINECEK BU ALLTAKI LINK */}
        <ul>
          <Link to="/dash">
             dash
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar