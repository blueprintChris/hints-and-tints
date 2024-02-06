import { useState } from 'react';
import { Cards, PlayerList, LargeCardModal } from '../../components';
import { Players } from '../../types/Players';
import { Square } from '../../constants/board';
import styles from './SidePanel.module.css';

const SidePanel = ({ players }: Props) => {
  const [isModalShowing, setIsModalShowing] = useState(false);

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
      <LargeCardModal isShowing={isModalShowing} onColourSelect={handleColourSelect} />
    </div>
  );
};

type Props = {
  players: Players;
};

export default SidePanel;
