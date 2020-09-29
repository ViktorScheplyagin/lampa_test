import React from 'react';
import Header from './Header';

const HeaderContainer: React.FC = () => {
  //TODO make header sticky if 5em scrolled down
  return (
    <Header theme="dark" />
  )
};

export default HeaderContainer;