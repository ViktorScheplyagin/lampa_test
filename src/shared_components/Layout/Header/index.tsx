import React from 'react';
import NavBar from 'shared_components/NavBar';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
