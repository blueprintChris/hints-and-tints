import { Player } from '../../types/Players';
import styles from './PlayerList.module.css';

const PlayerList = ({ players, showScores, role }: Props) => {
  return (
    <div className={styles.playerContainer}>
      {players.map(
        pl =>
          pl.role === role && (
            <div className={styles.player} key={pl.id}>
              <div className={styles.playerColourWrapper}>
                <div className={styles.playerColour} style={{ backgroundColor: pl.colour }} />
                <span>{pl.name}</span>
              </div>
              {showScores && <span>{pl.score}</span>}
            </div>
          )
      )}
    </div>
  );
};

type Props = {
  players: Player[];
  showScores?: boolean;
  role: string;
};

export default PlayerList;
