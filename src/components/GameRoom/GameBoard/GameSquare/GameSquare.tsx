import { Square } from '../../../../constants/board';
import { Player } from '../../../../types/Players';
import Tooltip from '../../../Tooltip/Tooltip';
import styles from './GameSquare.module.css';

const GameSquare = ({ square, onClick, selectedSquare, gridOwner }: Props) => {
  return (
    <Tooltip offset={{ x: 20, y: 20 }} square={square}>
      <button
        className={styles.square}
        key={square.ref}
        style={{ backgroundColor: square.hex }}
        data-content={square.col}
        onClick={() => onClick(square)}
        disabled={gridOwner?.firstTint ? true : false}
      >
        {gridOwner?.firstTint ? (
          <Tooltip offset={{ x: 20, y: 20 }} text={`${gridOwner.name}`}>
            <div className={styles.selected} style={{ backgroundColor: gridOwner.colour }}>
              {gridOwner.name.substring(0, 1)}
            </div>
          </Tooltip>
        ) : (
          selectedSquare?.ref === square.ref && <div className={styles.selected}></div>
        )}
      </button>
    </Tooltip>
  );
};

type Props = {
  square: Square;
  onClick: (square: Square) => void;
  selectedSquare?: Square | null;
  gridOwner?: Player;
};

export default GameSquare;
