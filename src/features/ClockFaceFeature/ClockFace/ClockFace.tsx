import { FC } from 'react';
import styles from './ClockFace.module.scss';

const LABEL_LIST: { id: number; value: JSX.Element }[] = [
  { id: 1, value: <>&nbsp;&nbsp;0&nbsp;&nbsp;</> },
  { id: 2, value: <>10</> },
  { id: 3, value: <>20</> },
  { id: 4, value: <>30</> },
  { id: 5, value: <>40</> },
  { id: 6, value: <>50</> },
  { id: 7, value: <>60</> },
  { id: 8, value: <>70</> },
  { id: 9, value: <>80</> },
  { id: 10, value: <>90</> },
  { id: 11, value: <>100</> },
];

const START_LABEL_POSITION_DEG = -45;

// const END_LABEL_POSITION_DEG = 222;

const LABEL_STEP_DEG = 27;

export const ClockFace: FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.hidingPartOfTheCircle} />
      <div className={styles.internalCircleLevel2} />

      {LABEL_LIST.map((label, index) => {
        const currentDeg = index * LABEL_STEP_DEG + START_LABEL_POSITION_DEG;
        return (
          <div
            key={label.id}
            className={styles.label}
            style={{ transform: `rotate(${currentDeg}deg)` }}
          >
            <div style={{ transform: `rotate(${-currentDeg}deg)` }}>
              {label.value}
            </div>
          </div>
        );
      })}

      <div className={styles.externalCircle}>
        <div className={styles.internalCircleLevel1} />
      </div>
    </div>
  );
};
