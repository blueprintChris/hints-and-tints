import { useContext } from 'react';
import { Square, grid } from '../../../constants/board';
import { GameContext, PlayerContext } from '../../../context';
import GameSquare from './GameSquare/GameSquare';
import styles from './GameBoard.module.css';

const GameBoard = () => {
  const { currentTurn, gameState, players } = useContext(GameContext);
  const { player, selectedSquare, setSelectedSquare } = useContext(PlayerContext);

  const handleSquareClick = (square: Square) => {
    if (gameState === 'GUESSING_ONE' || gameState === 'GUESSING_TWO') {
      if (currentTurn?.id === player?.id) {
        setSelectedSquare(square);
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
          {row.squares.map(square => {
            const player = players.find(pl => pl.firstTint?.ref === square.ref);
            return (
              <GameSquare
                square={square}
                onClick={handleSquareClick}
                key={square.ref}
                selectedSquare={selectedSquare}
                gridOwner={player}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
