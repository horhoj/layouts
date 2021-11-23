import { FC } from 'react';
import { SliderItem } from '../types';
import styles from './Card.module.scss';

interface CardProps {
  sliderItem: SliderItem;
}

export const Card: FC<CardProps> = ({ sliderItem }) => {
  return (
    <div className={styles.wrap}>
      <pre>{JSON.stringify(sliderItem, null, 2)}</pre>
    </div>
  );
};
