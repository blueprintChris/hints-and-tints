import { useState } from 'react';
import GameContextProvider from '../../context/GameContext';
import PlayerContextProvider from '../../context/PlayerContext';
import { Players } from '../../types/Players';
import styles from './ConnectedApp.module.css';
import { GameBoard, SidePanel } from '../../components';

const ConnectedApp = () => {
  const [players, setPlayers] = useState<Players>([
    { name: 'Chris', id: 0, score: 0, turn: 0, isTurn: true, isClueGiver: true },
  ]);
  return (
    <GameContextProvider>
      <PlayerContextProvider players={players}>
        <>
          <div className={styles.header}>
            <span className={styles.text}>Tints & Hints</span>
          </div>
          <div className={styles.content}>
            <div className={styles.boardContainer}>
              <GameBoard />
            </div>
            <div className={styles.sidePanelContainer}>
              <SidePanel players={players} />
            </div>
          </div>
        </>
      </PlayerContextProvider>
    </GameContextProvider>
  );
};

export default ConnectedApp;
