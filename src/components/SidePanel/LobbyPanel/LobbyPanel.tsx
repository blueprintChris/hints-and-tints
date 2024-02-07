import { Player } from '../../../types/Players';
import Button from '../../Button/Button';
import PlayerList from '../../PlayerList/PlayerList';
import styles from './LobbyPanel.module.css';

const LobbyPanel = ({ players, player, onHinterClick, onJoinClick, onStartClick }: Props) => {
  const hinter = players.find(pl => pl.role === 'hinter');

  return (
    <div className={styles.lobbyWrapper}>
      <div className={styles.buttonContainer}>
        <h1>Hinter</h1>
        <div className={styles.buttonWrapper}>
          {hinter ? (
            <div>{hinter?.name}</div>
          ) : (
            <Button onClick={onHinterClick} text='Join as hinter' disabled={player?.role !== ''} />
          )}
        </div>
        <h1>Tinters</h1>
        <div className={styles.buttonWrapper}>
          {!player?.role && (
            <Button onClick={onJoinClick} text='Join game' disabled={player?.role !== ''} />
          )}
          {players.map(pl => pl.role === 'tinter' && <>{pl.name}</>)}
        </div>
      </div>

      <PlayerList players={players} />
      <div className={styles.buttonWrapper}>
        <Button onClick={onStartClick} text='Start Game' colour='#48B86E' />
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
