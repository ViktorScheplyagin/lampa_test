import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBarPanel from './NavBarPanel';

const NavBar: React.FC = () => {
  return (
    <NavBarPanel>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/women">Women</NavLink>
      <NavLink to="/house_and_home">House&Home</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </NavBarPanel>
  )
}

export default NavBar;