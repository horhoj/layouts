import { FC } from 'react';
import styles from './YandexRealtyWidget.module.scss';
import { TitleBlock } from './TitleBlock';

export const YandexRealtyWidget: FC = () => {
  return (
    <div className={styles.wrap}>
      <TitleBlock />
    </div>
  );
};
