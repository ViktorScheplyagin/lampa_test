import React from 'react';
import { Box, Image } from '@chakra-ui/core';


type LogoType = {
  theme?: "dark" | "white",
  size?: string;
};

const logo = {
  white: "https://smallimg.pngkey.com/png/small/11-112773_apple-logo-2014-png-apple-logo-in-white.png",
  dark: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/863px-Apple_logo_black.svg.png"
}

const Logo: React.FC<LogoType> = ({ theme, size }) => {
  return (
    <Box
      w={size || "50px"}
    >
      <Image src={theme ? logo[theme] : logo.white} alt="logo" />
    </Box>
  )
};

export default Logo;