import { useContext, useState } from 'react';
import { PlayerList, LargeCardModal, Button } from '../../components';
import { Players } from '../../types/Players';
import { Square } from '../../constants/board';
import styles from './SidePanel.module.css';
import { GameContext, PlayerContext } from '../../context';
import { socket } from '../../socket/Socket';

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
    socket.emit('update-role', { roomId, player, role: 'hinter' });
  };

  const handleJoinGame = () => {
    socket.emit('update-role', { roomId, player, role: 'guesser' });
  };

  const handleStartGame = () => {
    socket.emit('update-game-state', { roomId, gameState: 'SELECTION' });
  };

  return (
    <div className={styles.sidePanel}>
      {gameState === 'LOBBY' && (
        <>
          <div className={styles.playerListContainer}>
            <PlayerList players={players} />
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonWrapper}>
              <Button onClick={handleJoinGameAsHinter} text='Join game as hinter' />
            </div>
            <div className={styles.buttonWrapper}>
              <Button onClick={handleJoinGame} text='Join game as guesser' />
            </div>
            <div className={styles.buttonWrapper}>
              <Button onClick={handleStartGame} text='Start Game' />
            </div>
          </div>
        </>
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
