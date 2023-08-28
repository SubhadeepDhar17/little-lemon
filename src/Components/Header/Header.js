import React, { useState} from 'react';
import './Header.scss';
import Logo from '../../icons_assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";



const Header = () => {

  const [menuDisplay, setMenuDisplay] = useState(false);

  return (
    <>
      <ul>
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
    </>
  )
}

export default Header;