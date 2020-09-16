import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'shared_components/Button';
import styles from './NavBar.module.css';

type NavBarProps = {
  totalCartItemsPrice: number;
};

const NavBar: React.FC<NavBarProps> = ({ totalCartItemsPrice }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.pages_navigation}>
        <NavLink to="/">Home</NavLink>
      </div>
      <div className={styles.tocart_link_wrapper}>
        <div>{totalCartItemsPrice ? `Total: $${totalCartItemsPrice}` : null}</div>
        <NavLink to="/cart">
          <Button
            style={{
              height: '2.5em',
              width: '5em',
            }}
          >
            Cart
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
