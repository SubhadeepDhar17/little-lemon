import React, { useState} from 'react';
import './Header.css';
import Logo from '../icons_assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Nav from './Nav';


const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header-container">
        <NavLink to = "/">
            {<img className="logo-img" src = { Logo } alt = "Little Lemon logo" />}
        </NavLink>
      </header>
      <nav>
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "menu">Menu</NavLink>
        <NavLink to = "reservation">Reservation</NavLink>
      </nav>
    </>
  )
}

export default Header;