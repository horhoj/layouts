import { FC } from 'react';
import { Question } from '../types';
import styles from './QuestionItem.module.scss';

interface QuestionItemProps {
  questionItem: Question;
}

export const QuestionItem: FC<QuestionItemProps> = ({ questionItem }) => {
  return (
    <div className={styles.wrap}>
      <div>{questionItem.question}</div>
      <div>{questionItem.answer}</div>
    </div>
  );
};
