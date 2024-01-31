import { Square, grid } from '../../constants/board';
import styles from './GameBoard.module.css';

const GameBoard = () => {
  const handleSquareClick = (square: Square) => {
    alert(square.ref);
  };

  return (
    <div className={styles.gameboard}>
      {grid.map(row => (
        <div className={styles.row} data-content={row.row}>
          {row.squares.map(square => (
            <button
              className={styles.square}
              style={{ backgroundColor: square.hex }}
              data-content={square.col}
              onClick={() => handleSquareClick(square)}
            >
              {square.ref}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
