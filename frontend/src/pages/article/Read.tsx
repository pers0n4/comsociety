import '@toast-ui/editor/dist/toastui-editor-viewer.css';

import React from 'react';

import { Heading, Stack } from '@chakra-ui/react';
import { Viewer } from '@toast-ui/react-editor';
import { useParams } from 'react-router-dom';

import api from '../../utils/api';

const ArticleRead: React.FC = () => {
  const [data, setData] = React.useState({} as any);
  const viewerRef = React.useRef({} as Viewer);

  const params = useParams<{ id: string }>();

  React.useEffect(() => {
    api.get(`/posts/${params.id}`).then((response) => {
      setData(response.data);
      viewerRef.current.getInstance().setMarkdown(response.data.content);
    });
  }, [params.id]);

  return (
    <>
      <Stack>
        {data && (
          <>
            <Heading>{data.subject}</Heading>
            <Viewer ref={viewerRef} initialValue={data.content} />
          </>
        )}
      </Stack>
    </>
  );
};

export default ArticleRead;
