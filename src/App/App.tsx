import { useContext } from 'react';
import DisconnectedApp from './DisconnectedApp/DisconnectedApp';
import ConnectedApp from './ConnectedApp/ConnectedApp';
import { SocketContext } from '../context/SocketContext';
import styles from './App.module.css';

const App = () => {
  const { isConnected } = useContext(SocketContext);

  return <div className={styles.app}>{!isConnected ? <DisconnectedApp /> : <ConnectedApp />}</div>;
};

export default App;
