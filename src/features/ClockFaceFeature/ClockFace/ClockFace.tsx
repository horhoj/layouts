import { FC } from 'react';
import styles from './ClockFace.module.scss';
import { ClockFaceLabelItem } from './types';

const START_LABEL_POSITION_DEG = -45;

const END_LABEL_POSITION_DEG = 225;

const DEG_COUNT =
  Math.abs(START_LABEL_POSITION_DEG) + Math.abs(END_LABEL_POSITION_DEG);

interface ClockFaceProps {
  value: number;
  valueTitle: string;
  max: number;
  min: number;
  labelList: ClockFaceLabelItem[];
}

export const ClockFace: FC<ClockFaceProps> = ({
  value,
  valueTitle,
  min,
  max,
  labelList,
}) => {
  const LabelStepDeg = DEG_COUNT / (labelList.length - 1);

  const x = DEG_COUNT / (max - min);

  const currentDeg = x * value + START_LABEL_POSITION_DEG;

  return (
    <div className={styles.wrap}>
      <div className={styles.hidingPartOfTheCircle} />
      <div className={styles.internalCircleLevel2} />
      <div className={styles.valueWrap}>
        <div className={styles.value}>{valueTitle}</div>
      </div>

      <div
        className={styles.hourHand}
        style={{ transform: `rotate(${currentDeg}deg)` }}
      >
        <div className={styles.hourHandVisiblePart} />
      </div>

      {labelList.map((label, index) => {
        const currentDeg = index * LabelStepDeg + START_LABEL_POSITION_DEG;

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
