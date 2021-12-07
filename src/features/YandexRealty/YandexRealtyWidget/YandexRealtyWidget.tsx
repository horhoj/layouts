import { FC, useState } from 'react';
import styles from './YandexRealtyWidget.module.scss';
import { TitleBlock } from './TitleBlock';
import { FilterBlock } from './FilterBlock';
import { dataCardList, dataFilterList } from './data';
import { DataFilterItemValue } from './types';
import { CardList } from './CardList';

export const YandexRealtyWidget: FC = () => {
  const [currentFilter, setCurrentFilter] =
    useState<DataFilterItemValue>('new');

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
          dataCardList={dataCardList.filter(
            (dataCardItem) => dataCardItem.dataFilterValue === currentFilter,
          )}
        />
      </div>
    </div>
  );
};
