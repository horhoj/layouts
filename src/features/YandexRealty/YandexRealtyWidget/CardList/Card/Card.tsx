import { FC } from 'react';
import { DataCardItem } from '../../types';
import styles from './Card.module.scss';

interface CardProps {
  dataCardItem: DataCardItem;
}

export const Card: FC<CardProps> = ({ dataCardItem }) => {
  return (
    <div className={styles.wrap}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${dataCardItem.img})` }}
      />
      <div className={styles.dataWrap}>
        <div className={styles.title}>
          <span>
            {dataCardItem.square} м², {dataCardItem.title}
          </span>
        </div>
        <div className={styles.priceWrap}>
          <span className={styles.price}>
            {dataCardItem.price.toLocaleString()}{' '}
            {dataCardItem.dataFilterValue === 'rent' ? '₽/мес' : '₽'}.
          </span>
        </div>
        <div className={styles.addressWrap}>
          <span className={styles.address}>{dataCardItem.address}</span>
        </div>
      </div>
    </div>
  );
};
