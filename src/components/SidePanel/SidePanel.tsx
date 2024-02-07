import { useContext, useState } from 'react';
import { PlayerList, LargeCardModal, Button } from '../../components';
import { Player, Players } from '../../types/Players';
import { Square } from '../../constants/board';
import styles from './SidePanel.module.css';
import { GameContext, PlayerContext } from '../../context';
import { socket } from '../../socket/Socket';
import LobbyPanel from './LobbyPanel/LobbyPanel';

const SidePanel = ({ players }: Props) => {
  const [isModalShowing, setIsModalShowing] = useState(false);

  const { gameState, roomId } = useContext(GameContext);
  const { player } = useContext(PlayerContext);

  const handleCardClick = () => {
    setIsModalShowing(true);
  };

  const handleColourSelect = (square: Square) => {
    setIsModalShowing(false);
  };

  const handleJoinGameAsHinter = () => {
    socket.emit('update-player-role', { roomId, playerId: player?.id, role: 'hinter' });
  };

  const handleJoinGame = () => {
    socket.emit('update-player-role', { roomId, playerId: player?.id, role: 'tinter' });
  };

  const handleStartGame = () => {
    socket.emit('update-game-state', { roomId, gameState: 'SELECTION' });
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

      <LargeCardModal isShowing={isModalShowing} onColourSelect={handleColourSelect} />
    </div>
  );
};

type Props = {
  players: Players;
};

export default SidePanel;

// {/* <div className={styles.playerListContainer}>
//       <PlayerList players={players} />
//     </div> */}
//        {/* <div className={styles.cardsContainer}>
//       <Cards onClick={handleCardClick} />
//     </div> */}
