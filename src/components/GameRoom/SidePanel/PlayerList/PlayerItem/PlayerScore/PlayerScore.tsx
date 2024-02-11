import { useContext, useEffect, useState } from 'react';
import { UpArrow } from '../../../../..';
import { GameStates } from '../../../../../../constants';
import { GameContext } from '../../../../../../context';
import styles from './PlayerScore.module.css';

const PlayerScore = ({ score, gameState }: Props) => {
  const [newScore, setNewScore] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  const { isLoading } = useContext(GameContext);

  useEffect(() => {
    if (!isLoading) {
      setNewScore(score);
    }
  }, [isLoading, score]);

  useEffect(() => {
    setShowArrow(true);
  }, [score]);

  useEffect(() => {
    setShowArrow(false);
  }, []);

  return (
    <div className={styles.scoreWrapper}>
      {gameState === GameStates.SCORING && !isLoading && showArrow && <UpArrow />}
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
