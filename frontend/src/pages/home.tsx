import React from 'react';

import {
  Alert,
  AlertIcon,
  Box,
  Grid,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

interface CardProps {
  title: string;
  descriptuon: string;
  path: string;
}

<Text></Text>;
const LinkCard: React.FC<CardProps> = ({ descriptuon, title, path }) => {
  const history = useHistory();

  return (
    <Box
      m={2}
      p={6}
      shadow="lg"
      onClick={() => {
        history.push(path);
      }}
    >
      <Stack spacing="3">
        <Heading size="md">{title}</Heading>
        <Text>{descriptuon}</Text>
      </Stack>
    </Box>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Alert status="info">
        <AlertIcon />
        다크 모드, 챗봇 및 유저 인증 관련 기능 일부가 적용되어 있습니다.
      </Alert>
      <Grid gap={4} mt={2} templateColumns="repeat(3, 1fr)">
        <LinkCard
          descriptuon="게시판 기능을 사용할 수 있습니다"
          path="/board"
          title="Board"
        />
        <LinkCard
          descriptuon="자연어 처리 기능을 체험해볼 수 있습니다."
          path="/textrank"
          title="TextRank"
        />
        <LinkCard
          descriptuon="지도 기능을 사용할 수 있습니다"
          path="/directions"
          title="KakaoMap"
        />
      </Grid>
    </>
  );
};

export default Home;
