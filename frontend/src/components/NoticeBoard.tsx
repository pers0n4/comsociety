import {
  Box,
  Center,
  Divider,
  Flex,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const NoticeBoard: React.FC = () => {
  const data = [
    {
      name: 'name1',
      title: 'title1',
    },
    {
      name: 'name2',
      title: 'title2',
    },
  ];

  return (
    <Stack spacing={4}>
      <Stack direction={['column']} maxW="md" spacing={4}>
        <Text>Notice</Text>
        <Divider orientation="horizontal" w="100%" />
      </Stack>
      <Stack>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>title</Th>
              <Th isNumeric>Write by</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(({ title, name }) => (
              <Tr>
                <Td>
                  <div>{title}</div>
                </Td>
                <Td isNumeric>
                  <div>{name}</div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Stack>
    </Stack>
  );
};
export default NoticeBoard;
