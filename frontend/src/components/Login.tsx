import React from 'react';

import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Flex,
  Center,
  Text,
  Button,
  Checkbox,
  Container,
  Divider,
} from '@chakra-ui/react';

const Login: React.FC = () => {
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
                <Input placeholder="ID" type="ID" />
              </InputGroup>
            </Center>

            <Center>
              <InputGroup size="md" w="md">
                <InputLeftAddon children="Password" w="100px" />
                <Input placeholder="Password" type="Password" />
              </InputGroup>
            </Center>
          </Stack>

          <Stack>
            <Button colorScheme="blue" h="90px" variant="solid">
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
