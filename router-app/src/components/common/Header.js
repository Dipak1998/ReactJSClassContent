import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
const Header = () => {
  return (
    <>
      <nav className='navbar'>
        <ul className='nav__tags'>
          <li className='nav__tags_items'>
            <Link to='/'>Logo</Link>
          </li>
          {/* <li className='nav__tags_items'>
            <NavLink to='/'>Home</NavLink>
          </li> */}
          <li className='nav__tags_items'>
            <NavLink  to='/product'> Product</NavLink>
          </li>
          <li className='nav__tags_items'>
            <NavLink  to='/contact'>Contact</NavLink>
          </li>
          <li className='nav__tags_items'>
            <NavLink  to='/about'>About</NavLink>
          </li>
        </ul>
        <div className='nav__search'>
          <input type='search' />
        </div>
        <div className='profile__section'>
          <button>Login/SignUp</button>
        </div>
      </nav>
    </>
    // <nav className='navbar'>
    //   <div className='navbar__tags'>
    //     <Link to='/home'>Home</Link>
    //   </div>
    //   <div className='navbar__tags'>
    //     <Link to='/product'>Product</Link>
    //   </div>
    //   <div className='navbar__tags'>
    //     <Link to='/contact'>Contact</Link>
    //   </div>
    // </nav>
  )
}

export default Header
