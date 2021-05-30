import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import React from 'react';

import { Box, Button, CircularProgress, Input, Stack } from '@chakra-ui/react';
import { Editor } from '@toast-ui/react-editor';
import { useHistory } from 'react-router-dom';

import api from '../../utils/api';

const ArticleWrite: React.FC = () => {
  const [subject, setSubject] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const editorRef = React.useRef({} as Editor);

  const hisotry = useHistory();

  const handlePost = () => {
    setIsLoading(true);

    const article = editorRef.current.getInstance();

    // HACK: author id
    api
      .post('/posts/', {
        author_id: 'efca10df-cf51-4f41-9bc2-09df149165f3',
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
