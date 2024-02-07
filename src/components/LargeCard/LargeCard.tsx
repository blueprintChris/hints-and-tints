import { PropsWithChildren } from 'react';
import styles from './LargeCard.module.css';

const LargeCard = ({ children }: PropsWithChildren) => {
  return <div className={styles.largeCard}>{children}</div>;
};

export default LargeCard;
