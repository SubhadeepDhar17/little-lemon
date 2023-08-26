import React, { useState} from 'react';
import './Header.scss';
import Logo from '../../icons_assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";



const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul>
        <li>
          <NavLink to="/">
            <img src={Logo}/>
          </NavLink>
        </li>
        <li>
          <div className='menu'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="menu">Menu</NavLink></li>
            <li><NavLink to="chefs">Chefs</NavLink></li>
            <li><NavLink to="specials">Specials</NavLink></li>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Header;