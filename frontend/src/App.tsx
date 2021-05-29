import React from 'react';

import { Button, ChakraProvider, Link } from '@chakra-ui/react';
import {
  Route,
  BrowserRouter as Router,
  Link as RouterLink,
  Switch,
} from 'react-router-dom';

import Login from './components/Login';
// import MyPage from './components/MyPage';
import Signup from './components/Signup';
import Container from './components/layouts/Container';
import Header from './components/layouts/Header';
import Board from './pages/board';
import Home from './pages/home';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Header>
          <Link as={RouterLink} to="/board">
            <Button variant="ghost">Board</Button>
          </Link>
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
            <Route component={Home} exact path="/" />
            <Route component={Board} path="/board" />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ChakraProvider>
  );
};

export default App;
