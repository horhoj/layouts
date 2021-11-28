import { FC } from 'react';
import styles from './DuckDuckGoFrequentlyAskedQuestions.module.scss';
import { data } from './data';
import { QuestionList } from './QuestionList';

export const DuckDuckGoFrequentlyAskedQuestions: FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.QuestionListWrap}>
        <QuestionList questionList={data} />
      </div>
    </div>
  );
};
