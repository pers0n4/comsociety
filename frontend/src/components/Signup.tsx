import React, { useState } from 'react';

import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Center,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Divider,
  Link,
  useToast,
} from '@chakra-ui/react';
import { Link as RouterLink, useHistory } from 'react-router-dom';

import api from '../utils/api';

const Signup: React.FC = () => {
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkpw, setCheckpw] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const history = useHistory();
  const toast = useToast();

  const handleClick = () => setShow(!show);
  const handleSignup = () => {
    handleCheck();
    if (!passwordError) {
      api
        .post('/users/', {
          name: name,
          password: password,
          user_id: userId,
        })
        .then((response) => {
          toast({
            description: '회원가입에 성공하였습니다. 로그인 해주세요.',
            duration: 5000,
            isClosable: true,
            status: 'success',
            title: '회원가입 성공.',
          });
          history.push('/login');
        });
    }
  };

  const handleCheck = () => {
    if (password !== checkpw) {
      return setPasswordError(true);
    }
    console.log({
      checkpw,
      name,
      password,
      passwordError,
      userId,
    });
  };

  const onChangePassword = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setPassword(event.target.value);
  const onChangePasswordChk = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPasswordError(event.target.value !== password);
    setCheckpw(event.target.value);
  };

  return (
    <Center>
      <Stack spacing={4}>
        <Center>
          <Text fontSize="20px">회원가입</Text>
        </Center>

        <Divider orientation="horizontal" />

        <FormControl id="Student_id">
          <FormLabel>학번</FormLabel>
          <Input
            placeholder="Student id"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </FormControl>

        <FormControl id="name">
          <FormLabel>이름</FormLabel>
          <Input
            placeholder="Name"
            type="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>비밀번호</FormLabel>
          <InputGroup size="md">
            <Input
              placeholder="Enter password"
              pr="4.5rem"
              required
              type={show ? 'text' : 'password'}
              value={password}
              onChange={onChangePassword}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="check-password">
          <FormLabel>비밀번호 확인</FormLabel>
          <Input
            placeholder="Enter password"
            required
            type="password"
            value={checkpw}
            onChange={onChangePasswordChk}
          />
          {passwordError && (
            <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>
          )}
        </FormControl>

        <Stack direction="row" spacing={4}>
          <Button
            colorScheme="blue"
            variant="solid"
            w="32"
            onClick={handleSignup}
          >
            가입하기
          </Button>
          <Link as={RouterLink} to="/login">
            <Button colorScheme="blue" variant="solid" w="32">
              취소
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Center>
  );
};

export default Signup;
