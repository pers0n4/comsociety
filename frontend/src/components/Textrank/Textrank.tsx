import React from 'react';

import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Table,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { Api } from '../../utils/api';
import WordCloud from '../WordCloud';

import data from './data';

const SampleButtons: React.FC<{
  onClick: React.Dispatch<React.SetStateAction<string>>;
}> = ({ onClick }) => {
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
  keywords: [string, number][];
  sentences: [string, number, string][];
}

const Textrank: React.FC = () => {
  const [text, setText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [rankedText, setRankedText] = React.useState({} as TextrankReponse);

  const handleClick = async () => {
    setIsLoading(true);
    const { data: response } = await Api.textrank<TextrankReponse>(
      text.split('\n')
    );
    setRankedText(response);
    setIsLoading(false);
  };

  return (
    <>
      <Stack direction="row">
        <SampleButtons onClick={setText} />
        <Stack flex={1}>
          <Box pos="relative">
            {isLoading && (
              <Box
                alignItems="center"
                bgColor="blackAlpha.500"
                d="flex"
                h="100%"
                justifyContent="center"
                pos="absolute"
                w="100%"
              >
                <CircularProgress isIndeterminate />
              </Box>
            )}
            <Textarea
              rows={20}
              size="sm"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </Box>
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
                {rankedText?.sentences?.map(([, rank, sentence]) => (
                  <Tr>
                    <Td>{rank} </Td>
                    <Td>{sentence}</Td>
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
                {rankedText?.keywords?.map(([word, rank]) => (
                  <Tr>
                    <Td>{rank}</Td>
                    <Td>{word}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Stack>

          {rankedText?.keywords && (
            <WordCloud
              words={rankedText?.keywords?.map(([word, rank]) => ({
                text: word,
                value: rank,
              }))}
            />
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default Textrank;
