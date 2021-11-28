import { FC } from 'react';
import { Question } from './types';
import { QuestionItem } from './QuestionItem';

interface QuestionListProps {
  questionList: Question[];
}

export const QuestionList: FC<QuestionListProps> = ({ questionList }) => {
  return (
    <div>
      {questionList.map((questionItem) => (
        <QuestionItem key={questionItem.id} questionItem={questionItem} />
      ))}
    </div>
  );
};
