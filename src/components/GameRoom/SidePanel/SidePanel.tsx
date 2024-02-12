import { useContext } from 'react';
import { Players } from '../../../types/Players';
import styles from './SidePanel.module.css';
import { GameContext, PlayerContext } from '../../../context';
import { socket } from '../../../socket/Socket';
import LobbyPanel from './LobbyPanel/LobbyPanel';
import ScorePanel from './ScorePanel/ScorePanel';
import { HINTER, TINTER } from '../../../constants/player';
import { GameStates, SocketEvents } from '../../../constants';

const SidePanel = ({ players }: Props) => {
  const {
    gameState,
    roomId,
    currentTurn,
    firstHint,
    secondHint,
    selectedColour,
    setIsLoading,
    isLoading,
  } = useContext(GameContext);
  const { player, selectedSquare } = useContext(PlayerContext);

  const handleJoinGameAsHinter = () => {
    socket.emit(SocketEvents.PLAYER_UPDATE_ROLE, { roomId, playerId: player?.id, role: HINTER });
  };

  const handleJoinGame = () => {
    socket.emit(SocketEvents.PLAYER_UPDATE_ROLE, { roomId, playerId: player?.id, role: TINTER });
  };

  const handleEndTurn = () => {
    socket.emit(SocketEvents.GAME_TURN_END, { roomId, selectedSquare, playerId: player?.id });
  };

  const handleNextRound = () => {
    socket.emit(SocketEvents.GAME_ROUND_END, { roomId });
  };

  const handleStartGame = () => {
    setIsLoading(true);

    socket.emit(SocketEvents.GAME_START, { roomId });
  };

  return (
    <div className={styles.sidePanel}>
      {gameState === GameStates.LOBBY ? (
        <LobbyPanel
          players={players}
          player={player}
          onHinterClick={handleJoinGameAsHinter}
          onJoinClick={handleJoinGame}
          onStartClick={handleStartGame}
        />
      ) : (
        <ScorePanel
          player={player}
          players={players}
          currentTurn={currentTurn}
          firstHint={firstHint}
          secondHint={secondHint}
          selectedColour={selectedColour}
          onEndTurnClick={handleEndTurn}
          onNextRoundClick={handleNextRound}
          selectedSquare={selectedSquare}
          gameState={gameState}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

type Props = {
  players: Players;
};

export default SidePanel;
