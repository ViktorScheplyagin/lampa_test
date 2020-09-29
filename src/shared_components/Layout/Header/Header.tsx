import React from 'react';
import NavBar from 'shared_components/NavBar';
import { Flex } from '@chakra-ui/core';
import Logo from 'shared_components/Logo';

type HeaderType = {
  theme: "dark" | "white",
};

const Header: React.FC<HeaderType> = ({ theme }) => {
  const inversedTheme = theme === "dark" ? "white" : "dark";

  return (
    <Flex
      px={[0, 0, 0, 20]}
      justify="space-between"
      pos="absolute" //TODO change position to fixed, if 5em scrolled down
      zIndex={1}
      w="100%"
      //TODO background changing depending from the theme prop:
      // "white": white background,
      // "dark": no background (transparent)
    >
      <Logo theme={theme} />
      <NavBar textColor={inversedTheme} />
    </Flex>
  );
};

export default Header;
