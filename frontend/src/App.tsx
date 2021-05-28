import React from 'react';

import { ChakraProvider, Icon, Button, Link } from '@chakra-ui/react';
import { IoLogoSnapchat } from 'react-icons/io';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from 'react-router-dom';

import ChangePassword from './components/ChangePassword';
import Login from './components/Login';
import Map from './components/Map';
import MyPage from './components/MyPage';
import NoticeBoard from './components/NoticeBoard';
import Roadview from './components/Roadview';
import Signup from './components/Signup';
import Container from './components/layouts/Container';
import Header from './components/layouts/Header';
import Home from './pages/home';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      {/* <Router>
        <Header>
          <Link as={RouterLink} to="/signup">
            <Button variant="ghost">Signup</Button>
          </Link>
          <Link as={RouterLink} to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link as={RouterLink} to="/mypage">
            <Button variant="ghost">MyPage</Button>
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
            <Route path="/mypage">
              <MyPage />
            </Route>
            <Route path="/changepassword">
              <ChangePassword />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router> */}
      <Header />
      <Container>
        {/* <Map /> */}
        {/* <Roadview /> */}
        <div style={{ height: '500px', width: '500px' }}>
          <a href="https://frogue.danbee.ai/?chatbot_id=b8ae9956-4a10-4c88-bda3-dd59697377bf">
            <Icon as={IoLogoSnapchat} />
            Chatbot
          </a>
        </div>
      </Container>
    </ChakraProvider>
  );
};

export default App;
