import { FC } from 'react';
import styles from './YandexRealty.module.scss';
import { YandexRealtyWidget } from './YandexRealtyWidget';

export const YandexRealty: FC = () => {
  return (
    <div className={styles.wrap}>
      <YandexRealtyWidget />
    </div>
  );
};
