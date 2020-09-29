import { Flex } from '@chakra-ui/core';
import React from 'react';


type BoardType = {
  height: string;
  cover: string;
};


const Board: React.FC<BoardType> = ({ height, cover }) => {
  return (
    <Flex
      align="center"
      justify='center'
      w="100%"
      h={height}
      overflow="hidden"
    >
      <img width="100%" src={cover} alt="cover" />
    </Flex>
  )
};

export default Board;