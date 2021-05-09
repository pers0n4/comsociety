import React from 'react';

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
} from '@chakra-ui/react';

const Signup: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Center>
      <Stack spacing={4}>
        <Center>
          <Text fontSize="20px">회원가입</Text>
        </Center>

        <Divider orientation="horizontal" />

        <FormControl id="Student_id">
          <FormLabel>학번</FormLabel>
          <Input placeholder="Student id" />
        </FormControl>

        <FormControl id="name">
          <FormLabel>이름</FormLabel>
          <Input placeholder="Name" type="name" />
        </FormControl>

        <FormControl>
          <FormLabel>비밀번호</FormLabel>
          <InputGroup size="md">
            <Input
              placeholder="Enter password"
              pr="4.5rem"
              type={show ? 'text' : 'password'}
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
          <Input placeholder="Enter password" type="password" />
        </FormControl>

        <Stack direction="row" spacing={4}>
          <Button colorScheme="blue" variant="solid" w="32">
            가입하기
          </Button>
          <Button colorScheme="blue" variant="solid" w="32">
            취소
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};

export default Signup;
