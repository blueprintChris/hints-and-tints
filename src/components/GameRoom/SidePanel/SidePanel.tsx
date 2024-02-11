import { useContext } from 'react';
import { Players } from '../../../types/Players';
import styles from './SidePanel.module.css';
import { GameContext, PlayerContext } from '../../../context';
import { socket } from '../../../socket/Socket';
import LobbyPanel from './LobbyPanel/LobbyPanel';
import ScorePanel from './ScorePanel/ScorePanel';
import { HINTER, TINTER } from '../../../constants/player';
import { GameStates } from '../../../constants';

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
    socket.emit('update-player-role', { roomId, playerId: player?.id, role: HINTER });
  };

  const handleJoinGame = () => {
    socket.emit('update-player-role', { roomId, playerId: player?.id, role: TINTER });
  };

  const handleEndTurn = () => {
    socket.emit('make-turn', { roomId, selectedSquare, playerId: player?.id });
  };

  const handleNextRound = () => {
    socket.emit('round-end', { roomId });
  };

  const handleStartGame = () => {
    setIsLoading(true);

    socket.emit('game-start', { roomId, gameState: GameStates.SELECTION_ONE });
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
