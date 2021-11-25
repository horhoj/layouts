import { FC } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../router';
import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={styles.wrap}>
      {routes
        .filter((route) => route.isFeature)
        .map((feature) => (
          <div className={styles.featureCard} key={feature.route}>
            <div className={styles.featureTitle}>ИД: {feature.route}</div>
            <div className={styles.featureImgPreviewWrap}>
              <Link to={feature.path}>
                <img
                  className={styles.featureImgPreview}
                  src={feature.imgPreview}
                  alt={`предпросмотр для ${feature.route}`}
                />
              </Link>
            </div>
            <div className={styles.featureDescription}>
              {feature.description}
            </div>
          </div>
        ))}
    </div>
  );
};
