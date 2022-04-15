// Libraries
import { NavLink } from 'react-router-dom'
// Components
import CartWidget from './CartWidget/CartWidget'
import imgLogo from '../../images/logo.png'
//Style
import './header.css'

const Header = () => {
 
// Dibujado de logo y secciones de navbar
  return (
    <header className='header'> 
      <nav className='header__nav'>
        <NavLink to='/' className='header__logo'>
          <img className='header__img' src={imgLogo} alt="logo" title="logo"/>
        </NavLink>
        <ul className='header__ul'>
          <li className='header__li'>
            <NavLink className='header__link' to='/'>
              Home
            </NavLink>
          </li>
          <li className='header__li'>
            <NavLink className='header__link' to='category/keyboard'>
              Keyboards
            </NavLink>
          </li>
          <li className='header__li'>
            <NavLink className='header__link' to='category/mice'>
              Mice
            </NavLink>
          </li>
          <li className='header__li'>
            <NavLink className='header__link' to='category/headsets'>
              Headsets
            </NavLink>
          </li>
          <li className='header__li'>
            <NavLink className='header__link' to='category/mousepads'>
              Mousepads
            </NavLink>
          </li>
        </ul>
        <NavLink className='header__link-cart' to='/cart'>
          <CartWidget />
        </NavLink>
      </nav>
    </header>
  )}

export default Header