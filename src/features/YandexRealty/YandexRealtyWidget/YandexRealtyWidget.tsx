import { FC, useEffect, useRef, useState } from 'react';
import styles from './YandexRealtyWidget.module.scss';
import { TitleBlock } from './TitleBlock';
import { FilterBlock } from './FilterBlock';
import { dataCardList, dataFilterList } from './data';
import { DataFilterItemValue } from './types';
import { CardList } from './CardList';

export const YandexRealtyWidget: FC = () => {
  const [currentFilter, setCurrentFilter] =
    useState<DataFilterItemValue>('new');

  const cardListRef = useRef<HTMLDivElement>(null);

  const dataCardListFiltered = dataCardList.filter(
    (dataCardItem) => dataCardItem.dataFilterValue === currentFilter,
  );

  useEffect(() => {
    if (cardListRef.current) {
      cardListRef.current.scrollBy({
        left: -cardListRef.current.scrollWidth,
        behavior: 'smooth',
        top: 0,
      });
    }
  }, [currentFilter]);

  const handleScrollBack = () => {
    if (cardListRef.current) {
      const currentScrollOffset = cardListRef.current.scrollLeft;
      const scrollWidth = cardListRef.current.scrollWidth;
      const scrollStep = scrollWidth / dataCardListFiltered.length;
      const newScrollOffset = Math.floor(currentScrollOffset % scrollStep);
      cardListRef.current.scrollBy({
        left: -(newScrollOffset === 0 ? scrollStep : newScrollOffset),
        behavior: 'smooth',
        top: 0,
      });
    }
  };

  const handleScrollForward = () => {
    if (cardListRef.current) {
      const currentScrollOffset = cardListRef.current.scrollLeft;
      const scrollWidth = cardListRef.current.scrollWidth;
      const scrollStep = scrollWidth / dataCardListFiltered.length;
      const newScrollOffset =
        scrollStep - Math.floor(currentScrollOffset % scrollStep);
      cardListRef.current.scrollBy({
        left: newScrollOffset,
        behavior: 'smooth',
        top: 0,
      });
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.titleBlockWrap}>
        <TitleBlock />
      </div>
      <div className={styles.filterBlockWrap}>
        <FilterBlock
          dataFilterList={dataFilterList}
          currentFilter={currentFilter}
          onCurrentFilter={setCurrentFilter}
        />
      </div>
      <div className={styles.cardListWrap}>
        <CardList dataCardList={dataCardListFiltered} ref={cardListRef} />
      </div>
      <div
        className={`${styles.scrollButton} ${styles.scrollButtonBack}`}
        onClick={handleScrollBack}
      />
      <div
        className={`${styles.scrollButton} ${styles.scrollButtonForward}`}
        onClick={handleScrollForward}
      />
    </div>
  );
};
