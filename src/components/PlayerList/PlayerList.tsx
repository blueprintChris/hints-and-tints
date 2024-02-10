import classnames from 'classnames';
import { Player } from '../../types/Players';
import styles from './PlayerList.module.css';

const PlayerList = ({ players, showScores, role, isHinter, currentTurn }: Props) => {
  return (
    <div className={classnames(styles.playerContainer, { [styles.hinter]: isHinter })}>
      {players.map(
        pl =>
          pl.role === role && (
            <div
              className={classnames(styles.player, { [styles.current]: currentTurn?.id === pl.id })}
              key={pl.id}
            >
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
  isHinter?: boolean;
  currentTurn?: Player | null;
};

export default PlayerList;
