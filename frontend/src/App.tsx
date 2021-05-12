import React from 'react';

import { ChakraProvider, Button, Link } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from 'react-router-dom';

import Login from './components/Login';
// import MyPage from './components/MyPage';
import Signup from './components/Signup';
import Container from './components/layouts/Container';
import Header from './components/layouts/Header';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Header>
          <Link as={RouterLink} to="/signup">
            <Button variant="ghost">Signup</Button>
          </Link>
          <Link as={RouterLink} to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
        </Header>

        <Container>
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ChakraProvider>
  );
};

export default App;
