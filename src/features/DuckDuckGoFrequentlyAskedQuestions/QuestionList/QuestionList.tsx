import { FC, useState } from 'react';
import { Question } from './types';
import { QuestionItem } from './QuestionItem';
import styles from './QuestionList.module.scss';

interface QuestionListProps {
  questionList: Question[];
}

export const QuestionList: FC<QuestionListProps> = ({ questionList }) => {
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<number>(-1);

  const handleQuestionItemClk = (index: number) => () => {
    if (activeQuestionIdx === index) {
      setActiveQuestionIdx(-1);
      return;
    }
    setActiveQuestionIdx(index);
  };

  return (
    <div className={styles.wrap}>
      {questionList.map((questionItem, index) => (
        <div key={questionItem.id}>
          <QuestionItem
            questionItem={questionItem}
            isActive={activeQuestionIdx === index}
            onClick={handleQuestionItemClk(index)}
          />
        </div>
      ))}
    </div>
  );
};
