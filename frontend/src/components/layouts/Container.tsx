import React from 'react';

import type { BoxProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

const Container: React.FC<BoxProps> = (props: BoxProps) => {
  return (
    <Box
      maxW={{ base: 'xl', md: '7xl' }}
      mx="auto"
      pb="12"
      pt="3"
      px={{ base: '6', md: '8' }}
      w="full"
      {...props}
    />
  );
};

export default Container;
