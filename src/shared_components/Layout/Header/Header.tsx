import React from 'react';
import NavBar from 'shared_components/NavBar';
import { Flex } from '@chakra-ui/core';
import Logo from 'shared_components/Logo';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Flex
      px={[0, 0, 0, 20]}
      justify="space-between"
      pos="fixed"
      zIndex={1}
      w="100%"
      shadow="inset 0 40px 70px -60px black"
      // TODO background changing depending from the theme prop:
      // "white": white background,
      // "dark": no background (transparent)
    >
      <NavLink to="/">
        <Logo size={{ x: "120px", y: "60px" }} />
      </NavLink>
      <NavBar />
    </Flex>
  );
};

export default Header;
