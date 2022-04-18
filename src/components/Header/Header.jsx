// Libraries
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

// Components
import CartWidget from './CartWidget/CartWidget'
import imgLogo from '../../images/logo.png'


const Header = () => {
 
// Dibujado de logo y secciones de navbar
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark"  className='header__nav-container'>
      <Container>
      <NavLink to='/' className='header__logo'>
          <img className='header__img' src={imgLogo} alt="logo" title="logo"/>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <NavLink className='header__link' to='/'>
              Home
            </NavLink>
            <NavLink className='header__link' to='category/keyboard'>
              Keyboards
            </NavLink>
            <NavLink className='header__link' to='category/mice'>
              Mice
            </NavLink>
            <NavLink className='header__link' to='category/headsets'>
              Headsets
            </NavLink>
            <NavLink className='header__link' to='category/mousepads'>
              Mousepads
            </NavLink>
        </Nav>
        <Nav>
        <NavLink className='header__link-cart' to='/cart'>
          <CartWidget />
        </NavLink>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )}

export default Header
