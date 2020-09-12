import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';


type NavBarProps = {
  className?: string;
}


const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.pages_navigation}>
        <NavLink to="/">
          Home
        </NavLink>
      </div>
      <NavLink to="/cart">
        <div className={styles.cart_button}>
          Cart
        </div>
      </NavLink>
    </div>
  )
};

export default NavBar;