import { FC, useEffect, useRef } from 'react';
import { DataCardItem } from '../types';
import styles from './CardList.module.scss';
import { Card } from './Card';

interface CardListProps {
  dataCardList: DataCardItem[];
}

export const CardList: FC<CardListProps> = ({ dataCardList }) => {
  useEffect(() => {
    if (dataCardListWrapRef.current) {
      dataCardListWrapRef.current.scrollTo(0, 0);
    }
  }, [dataCardList]);

  const dataCardListWrapRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.wrap} ref={dataCardListWrapRef}>
      {dataCardList.map((dataCardItem) => (
        <Card dataCardItem={dataCardItem} key={dataCardItem.id} />
      ))}
    </div>
  );
};
