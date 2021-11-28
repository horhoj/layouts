import { FC, useEffect, useRef, useState } from 'react';
import { Question } from '../types';
import styles from './QuestionItem.module.scss';
import { Control } from './Control';

interface QuestionItemProps {
  questionItem: Question;
  isActive: boolean;

  onClick(): void;
}

export const QuestionItem: FC<QuestionItemProps> = ({
  questionItem,
  isActive,
  onClick,
}) => {
  const [answerHeight, setAnswerHeight] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setAnswerHeight(ref.current.getBoundingClientRect().height);
    }
  }, [isActive, questionItem]);

  return (
    <div className={styles.wrap}>
      <button
        className={styles.wrapControlBtn}
        type={'button'}
        onClick={onClick}
      >
        <Control isActive={isActive} />
      </button>
      <div className={styles.wrapData}>
        <button
          className={styles.questionBtn}
          type={'button'}
          onClick={onClick}
        >
          {questionItem.question}
        </button>
        <div
          className={styles.answer}
          style={{
            height: isActive ? answerHeight : 0,
            visibility: isActive ? 'visible' : 'hidden',
          }}
        >
          <div ref={ref} className={styles.answerWrap}>
            {questionItem.answer}
          </div>
        </div>
      </div>
    </div>
  );
};
