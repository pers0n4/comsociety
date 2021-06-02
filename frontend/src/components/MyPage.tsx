import {
  Badge,
  Box,
  Center,
  Link,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const MyPage: React.FC = () => {
  const data = [
    {
      content: 'hello',
      date: '2020.05.16',
      title: 'title1',
    },
    {
      content: 'hello',
      date: '2020.05.16',
      title: 'title2',
    },
  ];
  const Info = [
    {
      userId: 'testID',
      userName: 'testname',
    },
  ];

  return (
    <Center>
      <Stack direction={['column']} spacing={4} w="md">
        <Box borderRadius="lg" borderWidth="1px" maxW="md" overflow="hidden">
          <Box p="6">
            <Stack spacing={4}>
              <Center>
                <Box d="flex">
                  <Badge borderRadius="full" colorScheme="blue" px="5">
                    My Info
                  </Badge>
                </Box>
              </Center>
              <Center>
                <Box>
                  {Info.map(({ userName, userId }) => (
                    <Box>
                      <div>{userId}</div>
                      <div>{userName}</div>
                    </Box>
                  ))}
                </Box>
              </Center>
            </Stack>
          </Box>
        </Box>
        <Box borderRadius="lg" borderWidth="1px" maxW="md" overflow="hidden">
          <Box p="6">
            <Center>
              <Box d="flex">
                <Badge borderRadius="full" colorScheme="blue" px="5">
                  Chang Password
                </Badge>
              </Box>
            </Center>
            <Center>
              <Box>
                <Link as={RouterLink} to="/changepassword">
                  Chang Password
                </Link>
              </Box>
            </Center>
          </Box>
        </Box>
        <Box borderRadius="lg" borderWidth="1px" maxW="md" overflow="hidden">
          <Box p="6">
            <Center>
              <Box d="flex">
                <Badge borderRadius="full" colorScheme="blue" px="5">
                  My Post
                </Badge>
              </Box>
            </Center>
            <Box
              as="h4"
              fontWeight="semibold"
              isTruncated
              lineHeight="tight"
              mt="1"
            >
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Title</Th>
                    <Th isNumeric>date by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(({ title, date }) => (
                    <Tr>
                      <Td>
                        <Link>
                          <div>{title}</div>
                        </Link>
                      </Td>
                      <Td isNumeric>
                        <div>{date}</div>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </Box>
        </Box>
        <Box borderRadius="lg" borderWidth="1px" maxW="md" overflow="hidden">
          <Box p="6">
            <Center>
              <Box d="flex">
                <Badge borderRadius="full" colorScheme="blue" px="5">
                  My Comment
                </Badge>
              </Box>
            </Center>
            <Box
              as="h4"
              fontWeight="semibold"
              isTruncated
              lineHeight="tight"
              mt="1"
            >
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Title</Th>
                    <Th isNumeric>date by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(({ title, date }) => (
                    <Tr>
                      <Td>
                        <div>{title}</div>
                      </Td>
                      <Td isNumeric>
                        <div>{date}</div>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Center>
  );
};

export default MyPage;
