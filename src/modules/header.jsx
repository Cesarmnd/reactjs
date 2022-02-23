import './header.css'
import imgLogo from '../images/logo.png'
import React from 'react'

const Header = () => {

  return (
    <header className='header'> 
      <nav 
    className='header__nav'>
        <a className='header__logo'>
          <img className='header__img' src={imgLogo} alt="logo" title="logo"/>
        </a>
        <ul className='header__ul'>
          <li className='header__li'>
            <a className='header__link' href="#">Home</a>
          </li>
          <li className='header__li'>
            <a className='header__link' href="#">Keyboards</a>
          </li>
          <li className='header__li'>
            <a className='header__link' href="#">Mice</a>
          </li>
          <li className='header__li'>
            <a className='header__link' href="#">Headsets</a>
          </li>
          <li className='header__li'>
            <a className='header__link' href="#">Muosepads</a>
          </li>
          <li className='header__li'>
            <a className='header__link' href="#">Speakers</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header