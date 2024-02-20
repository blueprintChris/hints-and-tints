import { useContext } from 'react';
import classnames from 'classnames';
import { socket } from '../../../socket/Socket';
import { GameContext, PlayerContext } from '../../../context';
import { useDeviceWidth } from '../../../hooks';
import LobbyPanel from './LobbyPanel/LobbyPanel';
import ScorePanel from './ScorePanel/ScorePanel';
import { GameStates, SocketEvents, PlayerRoles } from '../../../constants';
import { Player } from '../../../types/Players';
import styles from './SidePanel.module.css';
import { Action } from '../../../reducer/Action';

const SidePanel = ({ players, spectators }: Props) => {
  const {
    gameState,
    roomId,
    currentTurn,
    firstHint,
    secondHint,
    selectedColour,
    isLoading,
    dispatch,
  } = useContext(GameContext);
  const { player, selectedSquare } = useContext(PlayerContext);

  const { isTablet } = useDeviceWidth();

  const handleJoinGameAsHinter = () => {
    socket.emit(SocketEvents.GAME_JOIN, {
      roomId,
      playerId: player?.id,
      role: PlayerRoles.HINTER,
    });
  };

  const handleJoinGame = () => {
    socket.emit(SocketEvents.GAME_JOIN, {
      roomId,
      playerId: player?.id,
      role: PlayerRoles.TINTER,
    });
  };

  const handleEndTurn = () => {
    socket.emit(SocketEvents.GAME_TURN_END, { roomId, selectedSquare, playerId: player?.id });
  };

  const handleNextRound = () => {
    socket.emit(SocketEvents.GAME_ROUND_END, { roomId });
  };

  const handleStartGame = () => {
    dispatch({ type: Action.LOADING });

    socket.emit(SocketEvents.GAME_START, { roomId });
  };

  return (
    <div className={classnames(styles.sidePanel, { [styles.tablet]: isTablet })}>
      {gameState === GameStates.LOBBY ? (
        <LobbyPanel
          players={players}
          player={player}
          spectators={spectators}
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
          onJoinClick={handleJoinGame}
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
  players: Player[];
  spectators: Player[];
};

export default SidePanel;
