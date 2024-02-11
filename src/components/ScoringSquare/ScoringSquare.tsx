import { useContext, useEffect, useState } from 'react';
import styles from './ScoringSquare.module.css';
import { GameContext } from '../../context';

const ScoringSquare = ({ delay, duration }: Props) => {
  const [isShowing, setIsShowing] = useState(false);

  const { setIsLoading } = useContext(GameContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowing(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, setIsLoading]);

  return isShowing ? <div className={styles.scoringSquare}></div> : null;
};

type Props = {
  delay?: number;
  duration?: number;
};

export default ScoringSquare;
