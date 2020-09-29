import React from 'react';
import { Flex } from '@chakra-ui/core';
import { NavLink } from 'react-router-dom';

type NavBarProps = {
  textColor?: string;
  width?: string;
};

const NavBar: React.FC<NavBarProps> = ({ width, textColor }) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      w={width || "100%"}
      h="3.5em"
      p="1em"
      boxSizing="border-box"
      color={textColor || "gray.900"}
    >
      <NavLink to="/">Home</NavLink>
    </Flex>
  );
};

export default NavBar;
