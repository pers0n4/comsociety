import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import Container from './components/layouts/Container';
import Header from './components/layouts/Header';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Header />
      <Container>Hello, world!</Container>
    </ChakraProvider>
  );
};

export default App;
