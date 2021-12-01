import { FC, useEffect, useState } from 'react';
import styles from './ClockFaceFeature.module.scss';
import { ClockFace } from './ClockFace';
import { ClockFaceLabelItem } from './ClockFace/types';

export const ClockFaceFeature: FC = () => {
  const [value, setValue] = useState<number>(0);
  const [data, setData] = useState<Data>(data1);

  useEffect(() => {
    const timerID = setInterval(() => {
      const newValue = data.rndFn();
      setValue(newValue);
    }, data.timeoutDelay);

    return () => {
      clearInterval(timerID);
    };
  }, [data]);

  return (
    <div className={styles.wrap}>
      <div>
        <ClockFace
          value={value}
          valueTitle={data.titleFn(value)}
          min={data.minValue}
          max={data.maxValue}
          labelList={data.labelList}
        />
      </div>
      <div className={styles.controlPanel}>
        <button
          type={'button'}
          onClick={() => {
            setData(data1);
            setValue(0);
          }}
        >
          Скорость сети до 100 МБит/с
        </button>
        <button
          type={'button'}
          onClick={() => {
            (data2.rndFn as (isClear: boolean) => number)(true);
            setData(data2);
            setValue(0);
          }}
        >
          Разгон до 140 км/ч
        </button>
      </div>
    </div>
  );
};

interface Data {
  labelList: ClockFaceLabelItem[];
  maxValue: number;
  minValue: number;
  rndFn(): number;
  titleFn(value: number): string;
  timeoutDelay: number;
}

const data1: Data = {
  timeoutDelay: 800,
  labelList: [
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
  ],
  maxValue: 100,
  minValue: 0,
  rndFn() {
    return Math.floor(Math.random() * this.maxValue);
  },
  titleFn(value: number): string {
    return `${value} МБит/с`;
  },
};

const data2: Data = {
  timeoutDelay: 200,
  labelList: [
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
  ],
  maxValue: 140,
  minValue: 0,
  rndFn: data2RndFnCreator(140),
  titleFn(value: number): string {
    return `${value} км/ч`;
  },
};

function data2RndFnCreator(maxValue: number) {
  let val = 0;

  return function (isClear = false): number {
    if (isClear) {
      val = 0;
      return val;
    }
    val += 1;
    if (val <= maxValue) {
      return val;
    }
    return maxValue;
  };
}
