import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import Login from './components/Login';
import MyPage from './components/MyPage';
import Signup from './components/Signup';
import Container from './components/layouts/Container';
import Header from './components/layouts/Header';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Header />
      <Container>
        <Login />
        {/* <MyPage /> */}
        {/* <Signup /> */}
      </Container>
    </ChakraProvider>
  );
};

export default App;
