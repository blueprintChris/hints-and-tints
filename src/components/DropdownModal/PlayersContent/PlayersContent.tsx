import { Player } from '../../../types/Players';
import { Input } from '../../../components';

import styles from './PlayersContent.module.css';

const PlayersContent = ({ players, spectators }: Props) => {
  return (
    <div className={styles.dropdownContent}>
      <div className={styles.share}>
        <h2>Invite players by sending them this link:</h2>
        <div className={styles.inputWrapper}>
          <Input
            name='link'
            defaultValue={window.location.href}
            onChange={() => {}}
            placeholder=''
            withButton
            autoFocus={false}
          />
        </div>
      </div>
      <div className={styles.playersContainer}>
        <div className={styles.playersWrapper}>
          <h2>Players in this room</h2>
          <div className={styles.playersList}>
            {players.length === 0 ? (
              <div className={styles.player}>No roles assigned</div>
            ) : (
              players.map(player => (
                <div className={styles.player}>
                  <div className={styles.playerColour} style={{ backgroundColor: player.colour }} />
                  <span>{player.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
        <div className={styles.playersWrapper}>
          <h2>Spectators in this room</h2>
          <div className={styles.playersList}>
            {spectators.length === 0 ? (
              <div className={styles.player}>No players spectating</div>
            ) : (
              spectators.map(player => (
                <div className={styles.player}>
                  <div className={styles.playerColour} style={{ backgroundColor: player.colour }} />
                  <span>{player.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

type Props = {
  players: Player[];
  spectators: Player[];
};

export default PlayersContent;
