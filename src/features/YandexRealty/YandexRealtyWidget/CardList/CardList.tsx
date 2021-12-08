import { forwardRef } from 'react';
import { DataCardItem } from '../types';
import styles from './CardList.module.scss';
import { Card } from './Card';

interface CardListProps {
  dataCardList: DataCardItem[];
}

const CardListPrototype = forwardRef<HTMLDivElement, CardListProps>(
  ({ dataCardList }, ref) => {
    return (
      <div className={styles.wrap} ref={ref}>
        {dataCardList.map((dataCardItem) => (
          <Card dataCardItem={dataCardItem} key={dataCardItem.id} />
        ))}
      </div>
    );
  },
);

//Для устранения ошибки линтера об отсутствии displayName у CardList
CardListPrototype.displayName = 'CardList';

export const CardList = CardListPrototype;
