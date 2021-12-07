import { FC } from 'react';
import { DataFilterItem, DataFilterItemValue } from '../types';
import styles from './FilterBlock.module.scss';

interface FilterBlockProps {
  dataFilterList: DataFilterItem[];
  currentFilter: DataFilterItemValue;
  onCurrentFilter(value: DataFilterItemValue): void;
}

export const FilterBlock: FC<FilterBlockProps> = ({
  dataFilterList,
  currentFilter,
  onCurrentFilter,
}) => {
  return (
    <ul className={styles.wrap}>
      {dataFilterList.map((dataFilterItem) => (
        <li key={dataFilterItem.id}>
          <button
            className={`${styles.filterButton} ${
              dataFilterItem.value === currentFilter
                ? styles.filterButtonActive
                : ''
            }`}
            onClick={() => onCurrentFilter(dataFilterItem.value)}
          >
            {dataFilterItem.title}
          </button>
        </li>
      ))}
    </ul>
  );
};
