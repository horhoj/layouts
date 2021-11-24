import { FC } from 'react';
import { SliderItem } from '../types';
import icons from '../img/icons.svg';
import styles from './Card.module.scss';

interface CardProps {
  sliderItem: SliderItem;
}

export const Card: FC<CardProps> = ({ sliderItem }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.discountWrap}>-{sliderItem.discount}%</div>
      <div className={styles.imgWrap}>
        <img
          src={sliderItem.img}
          alt="product image"
          width={160}
          height={160}
        />
      </div>
      <div className={styles.titleWrap}>{sliderItem.title}</div>
      <div className={styles.ratioWrap}>
        <svg className={styles.iconStar}>
          <use xlinkHref={`${icons}#star`} />
        </svg>
        <span className={styles.ratio}>{sliderItem.ratio.toFixed(1)}</span>
        <span className={styles.ratioCount}>
          {sliderItem.ratioCount} отзывов
        </span>
      </div>
      <div className={styles.priceWrap}>
        <span className={styles.price}>
          {sliderItem.price.toLocaleString()}
        </span>
        <span className={styles.priceOld}>
          {sliderItem.priceOld.toLocaleString()} &nbsp;
        </span>
      </div>
      <div className={styles.buttonsWrap}>
        <button type={'button'} className={styles.buttonCart}>
          <svg className={styles.iconCart}>
            <use xlinkHref={`${icons}#cart`} />
          </svg>
        </button>
        <button type={'button'} className={styles.button}>
          <svg className={styles.iconLove}>
            <use xlinkHref={`${icons}#love`} />
          </svg>
        </button>
        <button type={'button'} className={styles.button}>
          <svg className={styles.iconHistogram}>
            <use xlinkHref={`${icons}#histogram`} />
          </svg>
        </button>
      </div>
    </div>
  );
};
