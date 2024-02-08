import { Square } from '../../../../constants/board';
import Tooltip from '../../../Tooltip/Tooltip';
import styles from './GameSquare.module.css';

const GameSquare = ({ square, onClick }: Props) => {
  return (
    <Tooltip offset={{ x: 20, y: 20 }} square={square}>
      <button
        className={styles.square}
        key={square.ref}
        style={{ backgroundColor: square.hex }}
        data-content={square.col}
        onClick={() => onClick(square)}
      ></button>
    </Tooltip>
  );
};

type Props = {
  square: Square;
  onClick: (square: Square) => void;
};

export default GameSquare;
