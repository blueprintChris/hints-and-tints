import { HINTER, TINTER } from '../../../constants/player';
import { Player } from '../../../types/Players';
import Button from '../../Button/Button';
import { LobbyList, PlayerList } from '../../../components';
import styles from './LobbyPanel.module.css';
import { Colours } from '../../../constants/colours';

const LobbyPanel = ({ players, player, onHinterClick, onJoinClick, onStartClick }: Props) => {
  const hinter = players.find(pl => pl.role === HINTER);
  const tinter = players.find(pl => pl.role === TINTER);

  const canStartGame = () => hinter && tinter;

  return (
    <div className={styles.lobbyContainer}>
      <div className={styles.playersContainer}>
        <h1>Hinter</h1>
        {hinter ? (
          <PlayerList players={players} role={HINTER} showScores={false} isHinter />
        ) : (
          <div className={styles.buttonWrapper}>
            <Button onClick={onHinterClick} text='Join as hinter' disabled={player?.role !== ''} />
          </div>
        )}
        <h1>Tinters</h1>
        <PlayerList players={players} role={TINTER} showScores={false} />
        {!player?.role && (
          <div className={styles.buttonWrapper}>
            <Button onClick={onJoinClick} text='Join game' disabled={player?.role !== ''} />
          </div>
        )}
      </div>
      <div className={styles.bottomWrapper}>
        <LobbyList players={players} />
        <div className={styles.buttonWrapper}>
          <Button
            onClick={onStartClick}
            text='Start Game'
            colour={Colours.GREEN}
            disabled={!canStartGame()}
          />
        </div>
      </div>
    </div>
  );
};

type Props = {
  players: Player[];
  player: Player | null;
  onHinterClick: () => void;
  onJoinClick: () => void;
  onStartClick: () => void;
};

export default LobbyPanel;
