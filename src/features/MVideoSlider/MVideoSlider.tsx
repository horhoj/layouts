import { FC } from 'react';
import styles from './MVideoSlider.module.scss';
import { Slider } from './Slider';
import { data } from './data';

export const MVideoSlider: FC = () => {
  return (
    <div className={styles.wrap}>
      <Slider sliderItemList={data} />
    </div>
  );
};
