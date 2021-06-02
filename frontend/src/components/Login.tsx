import React from 'react';

import {
  Button,
  Center,
  Checkbox,
  Container,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { useAuthDispatch } from '../context/Auth';
import api from '../utils/api';

import type { AuthState } from '../context/Auth/Context';

const Login: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const toast = useToast();
  const history = useHistory();
  const dispatch = useAuthDispatch();

  const handleLogin = () => {
    api
      .post<AuthState>('/auth/', {
        password,
        user_id: username,
      })
      .then((response) => {
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        dispatch(response.data);
        history.push('/');
      })
      .catch((error: Error) => {
        toast({
          description: error.message,
          isClosable: true,
          status: 'error',
        });
      });
  };

  return (
    <Stack spacing={4}>
      <Center>
        <Text fontSize="20px">Login</Text>
      </Center>

      <Center>
        <Flex align="center" h="100%">
          <Stack>
            <Center>
              <InputGroup size="md" w="md">
                <InputLeftAddon children="ID" w="100px" />
                <Input
                  placeholder="ID"
                  type="ID"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </InputGroup>
            </Center>

            <Center>
              <InputGroup size="md" w="md">
                <InputLeftAddon children="Password" w="100px" />
                <Input
                  placeholder="Password"
                  type="Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </InputGroup>
            </Center>
          </Stack>

          <Stack>
            <Button
              colorScheme="blue"
              h="90px"
              variant="solid"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Stack>
        </Flex>
      </Center>

      <Center>
        <Container>
          <Divider orientation="horizontal" />
        </Container>
      </Center>

      <Center>
        <Stack direction="column" spacing={4}>
          <Container>
            <Checkbox>로그인 유지</Checkbox>
          </Container>

          <Stack direction={['column', 'row']} spacing="10px">
            <Button colorScheme="blue" variant="solid" w="40">
              회원가입
            </Button>
            <Button colorScheme="blue" variant="solid" w="40">
              아이디 찾기
            </Button>
            <Button colorScheme="blue" variant="solid" w="40">
              비밀번호 찾기
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Stack>
  );
};

export default Login;
