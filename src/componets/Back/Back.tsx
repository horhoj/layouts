import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Back.module.scss';

export const Back: FC = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return !isHome ? (
    <div className={styles.wrap}>
      <Link to={'/'} className={styles.link}>
        НАЗАД
      </Link>
    </div>
  ) : null;
};
