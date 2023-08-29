import React, { useState} from 'react';
import './Header.scss';
import Logo from '../../icons_assets/Logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [menuDisplay, setMenuDisplay] = useState(false);

  const Menu = [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'Menu',
      to: 'menu'
    },
    {
      name: 'Chefs',
      to: '/chefs'
    },
  ]
  const MenuDisplay = Menu.map((list) => <li><NavLink to={list.to}>{list.name}</NavLink></li>);

  return (
    <>
      <ul>
        <li onClick={() => {setMenuDisplay(!menuDisplay)}}>
          <button className='hamburger'>Hamburger</button>
        </li>
        <li>
          <NavLink to='/'><img src={Logo} alt='' /></NavLink>
        </li>
        <li className='computerMenu'>
          {MenuDisplay}
        </li>
        <li>
          <button className='basket'>Basket</button>
        </li>
      </ul>
      <div className={`mobileMenu ${menuDisplay ? 'active' : 'inactive'}`}>
        {MenuDisplay}
      </div>
    </>
  )
}

export default Header;

/* <ul>
    <li>
      <div className='hamburger' onClick={() => {
        setMenuDisplay(!menuDisplay)
      }}>
        <button>==</button>
      </div>
    </li>
    <li className='logo'>
      <NavLink to="/">
        <img src={Logo}/>
      </NavLink>
    </li>
    <li>
      <div className={`menu menuDisplay ${menuDisplay ? 'active' : 'inactive'}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="menu">Menu</NavLink></li>
        <li><NavLink to="chefs">Chefs</NavLink></li>
        <li><NavLink to="specials">Specials</NavLink></li>
      </div>
    </li>
    <li>
      <button>|||</button>
    </li>
  </ul>
*/