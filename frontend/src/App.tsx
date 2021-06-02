import React from 'react';

import { Button, ChakraProvider, Icon, Link } from '@chakra-ui/react';
import { IoLogoSnapchat } from 'react-icons/io';
import {
  Route,
  BrowserRouter as Router,
  Link as RouterLink,
  Switch,
} from 'react-router-dom';

import Chatbot from './components/Chatbot';
import ChangePassword from './components/ChangePassword';
import Login from './components/Login';
import Map from './components/Map';
import MyPage from './components/MyPage';
import NoticeBoard from './components/NoticeBoard';
import Roadview from './components/Roadview';
import Signup from './components/Signup';
import Container from './components/layouts/Container';
import Header from './components/layouts/Header';
import { Read, Write } from './pages/article';
import Board from './pages/board';
import Home from './pages/home';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      {/* <Router>
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
          <Link as={RouterLink} to="/mypage">
            <Button variant="ghost">MyPage</Button>
          </Link>
        </Header>

        <Container>
          <Switch>es
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
            <Route component={Home} exact path="/" />
            <Route component={Board} path="/board" />
            <Route component={Write} path="/articles/new" />
            <Route component={Read} path="/articles/:id" />
          </Switch>
        </Container>
      </Router>

      <Header />
      <Container>
        {/* <Map /> */}
        {/* <Roadview /> */}
        <Chatbot />
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
