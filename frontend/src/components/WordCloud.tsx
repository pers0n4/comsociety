import React from 'react';

import ReactWordcloud from 'react-wordcloud';

import type { Word } from 'react-wordcloud';

interface Props {
  words: Word[];
}

const WordCloud: React.FC<Props> = ({ words }) => {
  return <ReactWordcloud size={[900, 400]} words={words} />;
};

export default WordCloud;
