import { FC, useEffect, useState } from 'react';
import styles from './ClockFaceFeature.module.scss';
import { ClockFace } from './ClockFace';
import { ClockFaceLabelItem } from './ClockFace/types';

const LABEL_LIST: ClockFaceLabelItem[] = [
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
  { id: 12, value: <>110</> },
  { id: 13, value: <>120</> },
  { id: 14, value: <>130</> },
  { id: 15, value: <>140</> },
];

const MAX_VALUE = 140;

const MIN_VALUE = 0;

export const ClockFaceFeature: FC = () => {
  const [value, setValue] = useState<number>(25);

  useEffect(() => {
    const timerID = setInterval(() => {
      const newValue = Math.floor(Math.random() * MAX_VALUE);
      setValue(newValue);
    }, 2000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <ClockFace
        value={value}
        valueTitle={`${value} МБит/с`}
        min={MIN_VALUE}
        max={MAX_VALUE}
        labelList={LABEL_LIST}
      />
    </div>
  );
};
