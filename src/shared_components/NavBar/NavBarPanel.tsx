import React from 'react';
import { Flex } from '@chakra-ui/core';

type NavBarPanelProps = {
  textColor?: string;
  width?: string;
  children: any[]
};

const NavBarPanel: React.FC<NavBarPanelProps> = ({ width, textColor, children }) => {
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
      {children}
    </Flex>
  );
};

export default NavBarPanel;
