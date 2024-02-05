import { Square } from '../../../../constants/board';
import styles from './GameSquare.module.css';

const GameSquare = ({ square, onClick }: Props) => {
  return (
    <button
      className={styles.square}
      key={square.ref}
      style={{ backgroundColor: square.hex }}
      data-content={square.col}
      onClick={() => onClick(square)}
    >
      {square.ref}
    </button>
  );
};

type Props = {
  square: Square;
  onClick: (square: Square) => void;
};

export default GameSquare;
