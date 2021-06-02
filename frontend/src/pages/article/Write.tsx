import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import React from 'react';

import {
  Box,
  Button,
  CircularProgress,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { Editor } from '@toast-ui/react-editor';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../context/Auth';
import api from '../../utils/api';

const ArticleWrite: React.FC = () => {
  const [subject, setSubject] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const editorRef = React.useRef({} as Editor);
  const auth = useAuth();

  const hisotry = useHistory();
  const toast = useToast();

  const [userInfo, setUserInfo] = React.useState<any>(undefined);

  React.useEffect(() => {
    if (!auth.access_token) {
      toast({
        description: '글을 쓰기 전 먼저 로그인해주세요',
        isClosable: true,
        status: 'error',
      });

      hisotry.push('/login');
    }

    setUserInfo(jwt.decode(auth.access_token));
    console.log(jwt.decode(auth.access_token));
  }, [auth]);

  const handlePost = () => {
    setIsLoading(true);

    const article = editorRef.current.getInstance();

    // HACK: author id
    api
      .post('/posts/', {
        author_id: userInfo.user_id,
        content: article.getMarkdown(),
        subject,
      })
      .then((response: any) => hisotry.push(`/articles/${response.data.id}`));
  };

  return (
    <>
      {isLoading && (
        <Box
          alignItems="center"
          backgroundColor="blackAlpha.300"
          display="flex"
          h="100vh"
          justifyContent="center"
          left="0"
          pos="absolute"
          top="0"
          w="100vw"
          zIndex="100"
        >
          <CircularProgress isIndeterminate />
        </Box>
      )}
      <Stack>
        <Input
          placeholder="제목"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <Editor
          ref={editorRef}
          height="400px"
          initialEditType="markdown"
          previewStyle="vertical"
          usageStatistics={false}
        />
        <Button colorScheme="blue" onClick={handlePost}>
          작성
        </Button>
      </Stack>
    </>
  );
};

export default ArticleWrite;
