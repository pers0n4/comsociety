import React from 'react';

import {
  Textarea,
  Button,
  Stack,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from '@chakra-ui/react';

import { Api } from '../../utils/api';

import data from './data';

const SampleButtons: React.FC<{ onClick: any }> = ({ onClick }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const key = (event.target as HTMLButtonElement).textContent;
    onClick(data[key as keyof typeof data].join('\n'));
  };

  return (
    <Stack>
      <Button size="xs" onClick={handleClick}>
        elisabeth
      </Button>
      <Button size="xs" onClick={handleClick}>
        lesmiserables
      </Button>
      <Button size="xs" onClick={handleClick}>
        rain
      </Button>
      <Button size="xs" onClick={handleClick}>
        rebecca
      </Button>
      <Button size="xs" onClick={handleClick}>
        summer
      </Button>
    </Stack>
  );
};

interface TextrankReponse {
  keywords: string[];
  sentences: string[];
}

const Textrank: React.FC = () => {
  const [text, setText] = React.useState('');
  const [rankedText, setRankedText] = React.useState({} as TextrankReponse);

  const handleClick = async () => {
    const { data: response } = await Api.textrank<TextrankReponse>(
      text.split('\n')
    );
    setRankedText(response);
  };

  return (
    <>
      <Stack direction="row">
        <SampleButtons onClick={setText} />
        <Stack flex={1}>
          <Textarea
            rows={20}
            size="sm"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <Button colorScheme="purple" isFullWidth={true} onClick={handleClick}>
            Post
          </Button>

          <Stack direction="row">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th isNumeric>Rank</Th>
                  <Th>Sentence</Th>
                </Tr>
              </Thead>
              <Tbody>
                {rankedText?.sentences?.map((item) => (
                  <Tr>
                    <Td>{item[1]}</Td>
                    <Td>{item[2]}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th isNumeric>Rank</Th>
                  <Th>Word</Th>
                </Tr>
              </Thead>
              <Tbody>
                {rankedText?.keywords?.map((item) => (
                  <Tr>
                    <Td>{item[1]}</Td>
                    <Td>{item[0]}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Textrank;
