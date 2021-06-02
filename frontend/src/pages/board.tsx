import React from 'react';

import { Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { format, parseJSON } from 'date-fns';
import { useHistory } from 'react-router-dom';

import api from '../utils/api';

type Article = {
  id: string;
  author_id: string;
  subject: string;
  content: string;
  viewed: number;
  created_at: Date;
  updated_at: Date;
};

const Board: React.FC = () => {
  const [articles, setArticles] = React.useState([] as Article[]);
  const history = useHistory();

  React.useEffect(() => {
    api.get<Article[]>('/posts/').then((response) => {
      console.log(response.data.map((item) => item.created_at));
      setArticles(response.data);
    });
  }, []);

  return (
    <>
      <Button colorScheme="blue" onClick={() => history.push('/articles/new')}>
        글쓰기
      </Button>
      <Table>
        <Thead>
          <Tr>
            <Th w="100%">제목</Th>
            <Th>작성자</Th>
            <Th>작성일</Th>
          </Tr>
        </Thead>
        <Tbody>
          {articles
            ? articles.map((article) => (
                <Tr
                  key={article.id}
                  _hover={{ background: 'blackAlpha.200' }}
                  whiteSpace="nowrap"
                  onClick={() => history.push(`/articles/${article.id}`)}
                >
                  <Td>{article.subject}</Td>
                  <Td>{article.author_id}</Td>
                  <Td>
                    {format(parseJSON(article.created_at), 'yyyy-MM-dd HH:mm')}
                  </Td>
                </Tr>
              ))
            : '작성된 글이 없습니다'}
        </Tbody>
      </Table>
    </>
  );
};

export default Board;
