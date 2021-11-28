import { FC } from 'react';
import styles from './Control.module.scss';

interface ControlProps {
  isActive: boolean;
}

export const Control: FC<ControlProps> = ({ isActive }) => {
  return (
    <svg width={20} height={20} className={isActive ? styles.reverse : ''}>
      <circle
        cx="10"
        cy="10.5"
        r="10"
        transform="rotate(-180 10 10.5)"
        fill="#E5E5E5"
      />
      <path
        d="M9.94454 12.8483L13.5355 9.25736C13.7308 9.0621 14.0474 9.0621 14.2426 9.25736C14.4379 9.45262 14.4379 9.7692 14.2426 9.96447L10.3536 13.8536C10.2418 13.9653 10.0903 14.0131 9.94454 13.9969C9.79879 14.0131 9.64729 13.9653 9.53553 13.8536L5.64645 9.96447C5.45118 9.7692 5.45118 9.45262 5.64645 9.25736C5.84171 9.0621 6.15829 9.0621 6.35355 9.25736L9.94454 12.8483Z"
        fill="#353748"
      />
    </svg>
  );
};
