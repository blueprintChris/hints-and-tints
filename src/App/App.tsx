import React from 'react';
import { GameBoard } from '../components';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <span className={styles.text}>Hues & Cues</span>
      </div>
      <div className={styles.boardContainer}>
        <GameBoard />
      </div>
    </div>
  );
};

export default App;
