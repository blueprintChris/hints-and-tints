import { Square, grid } from '../../../constants/board';
import styles from './GameBoard.module.css';
import GameSquare from './GameSquare/GameSquare';

const GameBoard = () => {
  const handleSquareClick = (square: Square) => {
    alert(`id: ${square.ref}\nhex: ${square.hex}`);
  };

  return (
    <div className={styles.gameboard}>
      {grid.map((row, idx) => (
        <div className={styles.row} data-content={row.row} key={idx}>
          {row.squares.map(square => (
            <GameSquare square={square} onClick={handleSquareClick} key={square.ref} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
