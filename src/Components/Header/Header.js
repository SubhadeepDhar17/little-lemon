import React, { useState} from 'react';
import './Header.scss';
import Logo from '../../icons_assets/Logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [menuDisplay, setMenuDisplay] = useState(false);

  const Menu = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Menu',
      to: 'menu'
    },
    {
      name: 'Chefs',
      to: '/chefs'
    },
    {
      name: 'Specials',
      to: '/specials'
    },
    {
      name: 'Book A Table',
      to: '/specials'
    },
  ]
  const MenuDisplay = Menu.map((list) => <li><NavLink to={list.to}>{list.name}</NavLink></li>);

  return (
    <>
      <ul>
        <li onClick={() => {setMenuDisplay(!menuDisplay)}}>
          <button className='hamburger'>Hamburger</button>
        </li>
        <li className='logo'>
          <NavLink to='/'><img src={Logo} alt='' /></NavLink>
        </li>
        <li className='computerMenu'>
          {MenuDisplay}
        </li>
        <li>
          <button className='basket'>Basket</button>
        </li>
      </ul>
      <div className={`mobileMenu ${menuDisplay ? 'active' : 'inactive'}`} onClick={() => setMenuDisplay(false)}>
        {MenuDisplay}
      </div>
    </>
  )
}

export default Header;