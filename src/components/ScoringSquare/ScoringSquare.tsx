import { useEffect, useState } from 'react';
import styles from './ScoringSquare.module.css';

const ScoringSquare = ({ delay, duration, size, onComplete }: Props) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowing(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

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
  onComplete: () => void;
};

export default ScoringSquare;
