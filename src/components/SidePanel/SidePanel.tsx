import { useContext, useState } from 'react';
import { Cards, ConnectionManager, ConnectionState, PlayerList } from '../../components';
import styles from './SidePanel.module.css';
import { Players } from '../../types/Players';
import LargeCardModal from '../LargeCardModal/LargeCardModal';
import { SocketContext } from '../../context/SocketContext';
import { Square } from '../../constants/board';

const SidePanel = ({ players }: Props) => {
  const [isModalShowing, setIsModalShowing] = useState(false);

  const { isConnected } = useContext(SocketContext);

  const handleCardClick = () => {
    setIsModalShowing(true);
  };

  const handleColourSelect = (square: Square) => {
    setIsModalShowing(false);
  };

  return (
    <div className={styles.sidePanel}>
      <div className={styles.cardsContainer}>
        <Cards onClick={handleCardClick} />
      </div>
      <div className={styles.playerListContainer}>
        <PlayerList players={players} />
      </div>
      <div>
        <ConnectionState isConnected={isConnected} />
        <ConnectionManager />
      </div>
      <LargeCardModal isShowing={isModalShowing} onColourSelect={handleColourSelect} />
    </div>
  );
};

type Props = {
  players: Players;
};

export default SidePanel;
