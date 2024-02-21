import { useContext } from 'react';
import { Square, grid } from '../../../constants/board';
import { GameContext, PlayerContext } from '../../../context';
import GameSquare from './GameSquare/GameSquare';
import styles from './GameBoard.module.css';
import GameRow from './GameRow/GameRow';
import { socket } from '../../../socket/Socket';
import { SocketEvents } from '../../../constants';
import { PlayerAction } from '../../../reducers/player/Action';
import { ToastContainer, toast } from 'react-toastify';

const GameBoard = () => {
  const { currentTurn, gameState, players, selectedColour, isLoading, roomId } =
    useContext(GameContext);
  const { player, selectedSquare, dispatch } = useContext(PlayerContext);

  const handleRevealComplete = () => {
    socket.emit(SocketEvents.GAME_UPDATE_SCORES, { roomId });
  };

  const handleSquareClick = (square: Square) => {
    if (gameState === 'GUESSING_ONE' || gameState === 'GUESSING_TWO') {
      if (currentTurn?.id === player?.id) {
        dispatch({
          type: PlayerAction.PLAYER_SELECTED_SQUARE,
          payload: { selectedSquare: square },
        });
      } else {
        toast('💩 No, no. Not your turn yet.', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
      }
    } else {
      toast("🤡 It's not tinting time yet!", {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
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
                handleRevealComplete={handleRevealComplete}
              />
            );
          })}
        </GameRow>
      ))}
      <ToastContainer limit={1} />
    </div>
  );
};

export default GameBoard;
