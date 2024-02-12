import { useContext, useEffect, useState } from 'react';
import styles from './ScoringSquare.module.css';
import { GameContext } from '../../context';

const ScoringSquare = ({ delay, duration, size }: Props) => {
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

  return isShowing ? (
    <div
      className={styles.scoringSquare}
      style={{ width: size ? `${size * 3}px` : '30px', height: size ? `${size * 3}px` : '30px' }}
    ></div>
  ) : null;
};

type Props = {
  size?: number | undefined;
  delay?: number;
  duration?: number;
};

export default ScoringSquare;
