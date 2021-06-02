import React from 'react';

import {
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';

const ChangePassword: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Center>
      <Stack spacing={4}>
        <Center>
          <Text fontSize="20px">비밀번호 변경</Text>
        </Center>
        <Divider orientation="horizontal" />
        <FormControl>
          <FormLabel>현재 비밀번호</FormLabel>
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
          <FormLabel>새 비밀번호</FormLabel>
          <Stack spacing={1}>
            <Input placeholder="Enter password" type="password" />
            <Input placeholder="Enter password" type="password" />
          </Stack>
        </FormControl>
        <Stack direction="row" spacing={200}>
          <Button colorScheme="blue" variant="solid" w="32">
            변경하기
          </Button>
          <Button colorScheme="blue" variant="solid" w="32">
            취소
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};
export default ChangePassword;
