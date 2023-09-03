import React, { useState} from 'react';
import './Header.scss';
import Logo from '../../icons_assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import Hamburger from '../../icons_assets/🦆 icon _hamburger menu.svg';
import Basket from '../../icons_assets/Basket.svg';

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
      to: '/details'
    },
  ]
  const MenuDisplay = Menu.map((list) => <li><NavLink to={list.to}>{list.name}</NavLink></li>);

  return (
    <>
      <ul>
        <li className='hamburgerLI' onClick={() => {setMenuDisplay(!menuDisplay)}}>
          <div className={`hamburger ${menuDisplay ? 'active' : 'inactive'}`}>
            <img src={Hamburger} />
          </div>
        </li>
        <li className='logo'>
          <NavLink to='/'><img src={Logo} alt='' onClick={() => setMenuDisplay(false)}/></NavLink>
        </li>
        <li className='computerMenu'>
          {MenuDisplay}
        </li>
        <li>
          <div className='basket'>
            <img src={Basket} />
          </div>
        </li>
      </ul>
      <div className={`mobileMenu ${menuDisplay ? 'active' : 'inactive'}`} onClick={() => setMenuDisplay(false)}>
        {MenuDisplay}
      </div>
    </>
  )
}

export default Header;