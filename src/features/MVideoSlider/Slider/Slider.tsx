import { FC, useEffect, useState } from 'react';
import { SliderItem } from '../types';
import { Card } from '../Card';
import styles from './Slider.module.scss';
import { getNextSlideIndex, getPrevSlideIndex } from './helpers';

const ANIMATION_DELAY = 1000;

interface SliderProps {
  sliderItemList: SliderItem[];
}

export const Slider: FC<SliderProps> = ({ sliderItemList }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [slideListLength, setSlideListLength] = useState<number>(0);
  const [isNextAnimate, setIsNextAnimate] = useState<boolean>(false);
  const [isPrevAnimate, setIsPrevAnimate] = useState<boolean>(false);
  const [isBlock, setIsBlock] = useState<boolean>(false);
  const [isTransition, setIsTransition] = useState<boolean>(false);

  useEffect(() => {
    setCurrentSlideIndex(0);
    setSlideListLength(sliderItemList.length);
  }, [sliderItemList]);

  const handlePrevBtnClk = () => {
    if (!isBlock) {
      if (!isBlock) {
        setIsBlock(true);
        setIsPrevAnimate(true);
        setIsTransition(true);
        setTimeout(() => {
          setIsPrevAnimate(false);
          setIsBlock(false);
          setIsTransition(false);
          setCurrentSlideIndex((prev) =>
            getPrevSlideIndex(prev, slideListLength),
          );
        }, ANIMATION_DELAY);
      }
    }
  };

  const handleNextBtnClk = () => {
    if (!isBlock) {
      setIsBlock(true);
      setIsNextAnimate(true);
      setIsTransition(true);
      setTimeout(() => {
        setIsNextAnimate(false);
        setIsBlock(false);
        setIsTransition(false);
        setCurrentSlideIndex((prev) =>
          getNextSlideIndex(prev, slideListLength),
        );
      }, ANIMATION_DELAY);
    }
  };

  const cardWrapStyles: string = [
    styles.cardWrap,
    isNextAnimate && styles.showNextAnimation,
    isTransition && styles.cardWrapTransition,
    isPrevAnimate && styles.showPrevAnimation,
  ]
    .filter((item) => Boolean(item))
    .join(' ');

  return (
    <div className={styles.wrap}>
      <div className={styles.cardScroll}>
        <div className={cardWrapStyles}>
          <div>
            <Card
              sliderItem={
                sliderItemList[
                  getPrevSlideIndex(currentSlideIndex, slideListLength)
                ]
              }
            />
          </div>
          <div>
            <Card sliderItem={sliderItemList[currentSlideIndex]} />
          </div>
          <div>
            <Card
              sliderItem={
                sliderItemList[
                  getNextSlideIndex(currentSlideIndex, slideListLength)
                ]
              }
            />
          </div>
        </div>
      </div>
      <button
        className={`${styles.btn} ${styles.left}`}
        type={'button'}
        onClick={handlePrevBtnClk}
      >
        L
      </button>
      <button
        className={`${styles.btn} ${styles.right}`}
        type={'button'}
        onClick={handleNextBtnClk}
      >
        R
      </button>
    </div>
  );
};
