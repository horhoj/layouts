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
  const [scrollStep, setScrollStep] = useState<number>(0);
  const cardListRef = useRef<HTMLDivElement>(null);

  const dataCardListFiltered = dataCardList.filter(
    (dataCardItem) => dataCardItem.dataFilterValue === currentFilter,
  );

  // const dataCardListFiltered = dataCardList;

  useEffect(() => {
    if (cardListRef.current) {
      const scrollWidth = cardListRef.current.scrollWidth;
      const newScrollStep = scrollWidth / dataCardListFiltered.length;
      setScrollStep(newScrollStep);
      cardListRef.current.scrollBy({ left: -scrollWidth, behavior: 'smooth' });
    }
  }, [currentFilter]);

  const handleScrollBack = () => {
    if (cardListRef.current) {
      const currentScrollOffset = cardListRef.current.scrollLeft;
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
        <CardList
          dataCardList={dataCardListFiltered}
          // scroll={scroll}
          // setScrollStep={setScrollStep}
          ref={cardListRef}
        />
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
