import { PropsWithChildren } from 'react';
import styles from './DisconnectedAppContainer.module.css';

const DisconnectedAppContainer = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default DisconnectedAppContainer;
