import { useState } from 'react';
import classnames from 'classnames';
import { Button } from '../../components';
import { Player } from '../../types/Players';
import DropdownModal from '../DropdownModal/DropdownModal';
import styles from './Header.module.css';
import PlayersContent from '../DropdownModal/PlayersContent/PlayersContent';
import PlayerContent from '../DropdownModal/PlayerContent/PlayerContent';

const Header = ({ name, scoreLimit, onRulesClick, players, spectators }: Props) => {
  const [showPlayers, setShowPlayers] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const handlePlayersClick = () => {
    setShowPlayers(true);
  };

  const handlePlayersClose = () => {
    setShowPlayers(false);
  };

  const handlePlayerClick = () => {
    setShowPlayer(true);
  };

  const handlePlayerClose = () => {
    setShowPlayer(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.leftWrapper}>
        <div className={styles.buttonWrapperPlayers}>
          <Button
            text={`Players 👥 ${players.length + spectators.length}`}
            onClick={handlePlayersClick}
          />
          <DropdownModal side='left' isShowing={showPlayers} onClose={handlePlayersClose}>
            <PlayersContent players={players} spectators={spectators} />
          </DropdownModal>
        </div>
      </div>
      <div className={styles.playerWrapper}>
        <span>Hey {name},&nbsp;</span>
        <span>
          the score to reach is: <span className={styles.scoreLimit}>{scoreLimit}</span>
        </span>
      </div>
      <div className={styles.rightWrapper}>
        <div className={classnames(styles.buttonWrapper, styles.rules)}>
          <Button text='Rules' onClick={onRulesClick} />
        </div>
        <div className={styles.buttonWrapper}>
          <Button text={`${name} 😀`} onClick={handlePlayerClick} />
          <DropdownModal side='right' isShowing={showPlayer} onClose={handlePlayerClose}>
            <PlayerContent />
          </DropdownModal>
        </div>
      </div>
    </div>
  );
};

type Props = {
  name: string;
  scoreLimit: number;
  onRulesClick: () => void;
  onPlayersClick: () => void;
  players: Player[];
  spectators: Player[];
};

export default Header;
