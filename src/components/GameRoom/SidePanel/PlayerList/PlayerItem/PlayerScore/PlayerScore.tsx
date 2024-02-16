import { useEffect, useState } from 'react';
import { UpArrow } from '../../../../..';
import { GameStates } from '../../../../../../constants';
import styles from './PlayerScore.module.css';

const PlayerScore = ({ score, gameState }: Props) => {
  const [newScore, setNewScore] = useState(score);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    if (
      gameState === GameStates.SCORING ||
      gameState === GameStates.GAME_END ||
      gameState === GameStates.SELECTION_ONE
    ) {
      setNewScore(score);
    }
  }, [gameState, score]);

  useEffect(() => {
    setShowArrow(true);
  }, [score]);

  useEffect(() => {
    setShowArrow(false);
  }, []);

  return (
    <div className={styles.scoreWrapper}>
      {(gameState === GameStates.SCORING || gameState === GameStates.GAME_END) && showArrow && (
        <UpArrow />
      )}
      <div className={styles.score}>
        <span>{newScore}</span>
      </div>
    </div>
  );
};

type Props = {
  gameState: string;
  score: number;
};

export default PlayerScore;
