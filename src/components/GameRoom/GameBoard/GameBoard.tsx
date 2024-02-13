import { useContext } from 'react';
import { Square, grid } from '../../../constants/board';
import { GameContext, PlayerContext } from '../../../context';
import GameSquare from './GameSquare/GameSquare';
import styles from './GameBoard.module.css';
import GameRow from './GameRow/GameRow';
import { socket } from '../../../socket/Socket';
import { SocketEvents } from '../../../constants';

const GameBoard = () => {
  const { currentTurn, gameState, players, selectedColour, isLoading, winner, roomId } =
    useContext(GameContext);
  const { player, selectedSquare, setSelectedSquare } = useContext(PlayerContext);

  const handleScoringComplete = () => {
    if (winner) {
      socket.emit(SocketEvents.GAME_END, { roomId });
    }
  };

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
        <GameRow key={idx} row={row.row}>
          {row.squares.map((square, index) => {
            const gridOwner =
              players.find(pl => pl.firstTint?.ref === square.ref) ||
              players.find(pl => pl.secondTint?.ref === square.ref);
            return (
              <GameSquare
                square={{ ...square, x: idx, y: index }}
                onClick={handleSquareClick}
                key={square.ref}
                selectedSquare={selectedSquare}
                gridOwner={gridOwner}
                player={player}
                delay={index * idx * 2}
                selectedColour={selectedColour}
                isLoading={isLoading}
                handleScoringComplete={handleScoringComplete}
              />
            );
          })}
        </GameRow>
      ))}
    </div>
  );
};

export default GameBoard;
