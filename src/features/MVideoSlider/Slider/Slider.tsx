import { FC, useEffect, useState } from 'react';
import { SliderItem } from '../types';
import { Card } from '../Card';
import icons from '../img/icons.svg';
import styles from './Slider.module.scss';
import { getNextSlideIndex, getPrevSlideIndex } from './helpers';

const ANIMATION_DELAY = 1000;
const AUTO_GOTO_NEXT_SLIDE_DELAY = 5000;

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
  const [currentTime, setCurrentTime] = useState<number>(new Date().getTime());
  const [isGoNext, setIsGoNext] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIsGoNext(true);
    }, AUTO_GOTO_NEXT_SLIDE_DELAY);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (isGoNext) {
      setIsGoNext(false);
      handleNextBtnClk();
    }
  }, [isGoNext]);

  useEffect(() => {
    setCurrentSlideIndex(0);
    setSlideListLength(sliderItemList.length);
  }, [sliderItemList]);

  const handlePrevBtnClk = () => {
    if (!isBlock && isMounted) {
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
  };

  const handleNextBtnClk = () => {
    if (!isBlock && isMounted) {
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

  // в теории, пока мы ожидаем загрузку
  // здесь можно показать заглушку или скелетон
  if (slideListLength === 0) {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>ТОВАРЫ ДНЯ</div>
      <div className={styles.countDown}>
        {new Date(currentTime).toLocaleTimeString()}
      </div>
      <div className={styles.cardScroll}>
        <div className={styles.countDownShadow} />
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
        <svg className={styles.btnIcon}>
          <use xlinkHref={`${icons}#chevron_left`} />
        </svg>
      </button>
      <button
        className={`${styles.btn} ${styles.right}`}
        type={'button'}
        onClick={handleNextBtnClk}
      >
        <svg className={styles.btnIcon}>
          <use xlinkHref={`${icons}#chevron_right`} />
        </svg>
      </button>
    </div>
  );
};
