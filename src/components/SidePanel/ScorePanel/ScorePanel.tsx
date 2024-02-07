import { HINTER, TINTER } from '../../../constants/player';
import { Player } from '../../../types/Players';
import styles from './ScorePanel.module.css';

const ScorePanel = ({ players }: Props) => {
  return (
    <div className={styles.scorePanel}>
      <div className={styles.buttonContainer}>
        <h1>Hinter</h1>
        <div className={styles.buttonWrapper}>
          <div>
            {players.map(
              pl =>
                pl.role === HINTER && (
                  <span>
                    {pl.name}: {pl.score}
                  </span>
                )
            )}
          </div>
        </div>
        <h1>Tinters</h1>
        <div className={styles.buttonWrapper}>
          {players.map(
            pl =>
              pl.role === TINTER && (
                <span>
                  {pl.name}: {pl.score}
                </span>
              )
          )}
        </div>
      </div>
    </div>
  );
};

type Props = {
  players: Player[];
};

export default ScorePanel;
