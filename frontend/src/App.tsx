import React from 'react';

import { Button, ChakraProvider, Link } from '@chakra-ui/react';
import {
  Route,
  BrowserRouter as Router,
  Link as RouterLink,
  Switch,
} from 'react-router-dom';

import ChangePassword from './components/ChangePassword';
import Chatbot from './components/Chatbot';
import Directions from './components/Directions';
import Login from './components/Login';
import MyPage from './components/MyPage';
import Roadview from './components/Roadview';
import Signup from './components/Signup';
import Container from './components/layouts/Container';
import Header from './components/layouts/Header';
import { AuthProvider, useAuth, useAuthDispatch } from './context/Auth';
import { Read, Write } from './pages/article';
import Board from './pages/board';
import Home from './pages/home';

import type { AuthState } from './context/Auth/Context';

const AuthRoute = () => {
  const auth = useAuth();
  const dispatch = useAuthDispatch();

  const handleLogout = () => {
    dispatch({} as AuthState);
  };

  if (auth.access_token) {
    return (
      <>
        <Button variant="ghost" onClick={handleLogout}>
          Logout
        </Button>
      </>
    );
  }

  return (
    <>
      <Link as={RouterLink} to="/signup">
        <Button variant="ghost">Signup</Button>
      </Link>
      <Link as={RouterLink} to="/login">
        <Button variant="ghost">Login</Button>
      </Link>
      <Link as={RouterLink} to="/mypage">
        <Button variant="ghost">MyPage</Button>
      </Link>
    </>
  );
};

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <Header>
            <Link as={RouterLink} to="/board">
              <Button variant="ghost">Board</Button>
            </Link>
            <AuthRoute />
          </Header>

          <Container>
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Signup} path="/signup" />
              <Route component={Login} path="/login" />
              <Route component={MyPage} path="/mypage" />
              <Route component={ChangePassword} path="/changepassword" />
              <Route component={Board} path="/board" />
              <Route component={Roadview} path="/roadview" />
              <Route component={Directions} path="/directions" />
              <Route component={Write} path="/articles/new" />
              <Route component={Read} path="/articles/:id" />
            </Switch>
            <Chatbot />
          </Container>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
