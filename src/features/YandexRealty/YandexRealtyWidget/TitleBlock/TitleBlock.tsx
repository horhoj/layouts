import { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './TitleBlock.module.scss';
import { useOutsideClick } from './useOutsideClick';

export const TitleBlock: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const title3dotMenuListRef = useRef<HTMLUListElement>(null);
  const title3dotMenuButtonRef = useRef<HTMLButtonElement>(null);
  useOutsideClick([title3dotMenuListRef, title3dotMenuButtonRef], () => {
    setIsOpenMenu(false);
  });

  return (
    <div className={styles.titleWrap}>
      <Link to={'#'} className={styles.titleLink}>
        <span className={styles.titleLinkImg} />
        Недвижимость
      </Link>
      <button
        ref={title3dotMenuButtonRef}
        className={styles.title3dotMenuButton}
        onClick={() => {
          setIsOpenMenu((prev) => !prev);
        }}
      />
      <ul
        className={`${styles.title3dotMenuList} ${
          !isOpenMenu ? styles.title3dotMenuHidden : ''
        }`}
        ref={title3dotMenuListRef}
      >
        <li>
          <button
            onClick={() => {
              alert('Вы нажали скрыть');
              setIsOpenMenu(false);
            }}
          >
            <span className={styles.eyeIcon} /> <span>Скрыть</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
