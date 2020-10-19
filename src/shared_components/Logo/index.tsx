import React from 'react';
import { Box, Image } from '@chakra-ui/core';


type LogoType = {
  size?: { x: string; y: string };
};

const Logo: React.FC<LogoType> = ({ size }) => {
  return (
    <Box 
      w={size?.x || "50px"}
      h={size?.y || "50px"}
    >
      <Image
        w="100%"
        h="100%"
        src='https://fakeimg.pl/120/bbbbbb'
        alt="logo"
      />
    </Box>
  )
};

export default Logo;