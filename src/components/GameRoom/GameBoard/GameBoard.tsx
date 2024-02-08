import { useContext } from 'react';
import { Square, grid } from '../../../constants/board';
import { socket } from '../../../socket/Socket';
import { GameContext, PlayerContext } from '../../../context';
import GameSquare from './GameSquare/GameSquare';
import styles from './GameBoard.module.css';

const GameBoard = () => {
  const { currentTurn, gameState } = useContext(GameContext);
  const { player } = useContext(PlayerContext);

  const handleSquareClick = (square: Square) => {
    if (gameState === 'GUESSING_ONE') {
      if (currentTurn?.id === player?.id) {
        socket.emit('make-turn', { square, player });
      } else {
        alert('aint your turn yet');
      }
    } else {
      alert('not tinting time');
    }
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
