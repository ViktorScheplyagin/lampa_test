import React from 'react';
import Header from './Header';
import styles from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.page_layout_content}>{children}</div>
    </>
  );
};

export default Layout;
