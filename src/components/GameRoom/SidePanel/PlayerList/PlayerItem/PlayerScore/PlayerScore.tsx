import { useEffect, useState } from 'react';
import { UpArrow } from '../../../../..';
import { GameStates } from '../../../../../../constants';
import { useSpring, animated } from '@react-spring/web';

import styles from './PlayerScore.module.css';

const Score = ({ number, numberFrom }: ScoreProps) => {
  const spring = useSpring({
    number,
    from: { number: numberFrom },
    config: {
      mass: 1,
      tension: 20,
      friction: 10,
    },
  });

  return <animated.span>{spring.number.to(n => n.toFixed(0))}</animated.span>;
};

const PlayerScore = ({ gameState, prevScore, score }: Props) => {
  const [newScore, setNewScore] = useState(score);
  const [newPrevScore, setNewPrevScore] = useState(prevScore);

  useEffect(() => {
    if (gameState === GameStates.SELECTION_ONE) {
      if (score === 0) {
        setNewScore(0);
        setNewPrevScore(0);
      }
    }
    if (gameState === GameStates.SCORING || gameState === GameStates.GAME_END) {
      if (score !== prevScore) {
        setNewPrevScore(prevScore);
        setNewScore(score);
      }
    }
  }, [gameState, prevScore, score]);

  return (
    <div className={styles.scoreWrapper}>
      {(gameState === GameStates.SCORING || gameState === GameStates.GAME_END) &&
        score !== prevScore && <UpArrow />}
      <div className={styles.score}>
        {gameState === GameStates.SCORING || gameState === GameStates.GAME_END ? (
          <Score number={newScore} numberFrom={newPrevScore} />
        ) : (
          <span>{newScore}</span>
        )}
      </div>
    </div>
  );
};

type Props = {
  gameState: string;
  score: number;
  prevScore: number;
};

type ScoreProps = {
  number: number;
  numberFrom: number;
};

export default PlayerScore;
