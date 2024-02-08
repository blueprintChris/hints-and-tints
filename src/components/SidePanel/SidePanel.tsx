import { useContext } from 'react';
import { Players } from '../../types/Players';
import styles from './SidePanel.module.css';
import { GameContext, PlayerContext } from '../../context';
import { socket } from '../../socket/Socket';
import LobbyPanel from './LobbyPanel/LobbyPanel';
import ScorePanel from './ScorePanel/ScorePanel';
import { HINTER, TINTER } from '../../constants/player';

const SidePanel = ({ players }: Props) => {
  const { gameState, roomId, currentTurn, firstHint, selectedColour, setIsLoading } =
    useContext(GameContext);
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

  const handleStartGame = () => {
    setIsLoading(true);

    socket.emit('game-start', { roomId, gameState: 'SELECTION' });

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className={styles.sidePanel}>
      {gameState === 'LOBBY' && (
        <LobbyPanel
          players={players}
          player={player}
          onHinterClick={handleJoinGameAsHinter}
          onJoinClick={handleJoinGame}
          onStartClick={handleStartGame}
        />
      )}
      {(gameState === 'SELECTION' || gameState === 'SELECTION_TWO') && <div>plz wait</div>}
      {gameState === 'GUESSING_ONE' && (
        <ScorePanel
          player={player}
          players={players}
          currentTurn={currentTurn}
          firstHint={firstHint}
          selectedColour={selectedColour}
          onEndTurnClick={handleEndTurn}
          selectedSquare={selectedSquare}
        />
      )}
    </div>
  );
};

type Props = {
  players: Players;
};

export default SidePanel;
