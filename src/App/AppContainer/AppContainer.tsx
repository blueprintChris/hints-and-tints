import { PropsWithChildren } from 'react';

import styles from './AppContainer.module.css';

const DisconnectedAppContainer = ({ children, isConnected }: PropsWithChildren<Props>) => {
  return (
    <div className={isConnected ? styles.containerConnected : styles.container}>{children}</div>
  );
};

type Props = {
  isConnected?: boolean;
};

export default DisconnectedAppContainer;
