import { FC } from 'react';
import styles from './ClockFaceFeature.module.scss';
import { ClockFace } from './ClockFace';

export const ClockFaceFeature: FC = () => {
  return (
    <div className={styles.wrap}>
      <ClockFace />
    </div>
  );
};
