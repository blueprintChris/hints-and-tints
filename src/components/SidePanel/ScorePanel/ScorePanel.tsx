import { Square } from '../../../constants/board';
import { Colours } from '../../../constants/colours';
import { HINTER, TINTER } from '../../../constants/player';
import { Player } from '../../../types/Players';
import Button from '../../Button/Button';
import styles from './ScorePanel.module.css';

const ScorePanel = ({
  players,
  player,
  firstHint,
  secondHint,
  selectedColour,
  currentTurn,
  onEndTurnClick,
  selectedSquare,
}: Props) => {
  const hinter = players.find(pl => pl.role === HINTER);
  const isHinter = hinter?.id === player?.id;

  return (
    <div className={styles.scorePanel}>
      <div className={styles.scoreWrapper}>
        <div className={styles.scoreContainer}>
          <h1>Hinter</h1>
          <div className={styles.playerContainer}>
            {players.map(
              pl =>
                pl.role === HINTER && (
                  <div className={styles.player} key={pl.id}>
                    <div className={styles.playerColourWrapper}>
                      <div className={styles.playerColour} style={{ backgroundColor: pl.colour }} />
                      <span>{pl.name}</span>
                    </div>
                    <span>{pl.score}</span>
                  </div>
                )
            )}
          </div>
        </div>
        <div className={styles.scoreContainer}>
          <h1>Tinters</h1>
          <div className={styles.playerContainer}>
            {players.map(
              pl =>
                pl.role === TINTER && (
                  <div
                    className={styles.player}
                    style={{ backgroundColor: currentTurn?.id === pl.id ? Colours.GREEN : '' }}
                    key={pl.id}
                  >
                    <div className={styles.playerColourWrapper}>
                      <div className={styles.playerColour} style={{ backgroundColor: pl.colour }} />
                      <span>{pl.name}</span>
                    </div>
                    <span>{pl.score}</span>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.hintWrapper}>
          <h1>Your Hint(s)</h1>
          <div className={styles.hintContainer}>
            <div className={styles.textWrapper}>
              {firstHint && <h2>{firstHint}</h2>}
              {secondHint && <h2>{secondHint}</h2>}
            </div>
            {isHinter && (
              <div className={styles.tint} style={{ backgroundColor: selectedColour?.hex }}>
                <span>{selectedColour?.ref}</span>
              </div>
            )}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            onClick={onEndTurnClick}
            text='End Turn'
            disabled={currentTurn?.id !== player?.id || !selectedSquare}
          />
        </div>
      </div>
    </div>
  );
};

type Props = {
  players: Player[];
  currentTurn: Player | null;
  firstHint: string;
  secondHint: string;
  selectedColour: Square | null;
  player: Player | null;
  onEndTurnClick: () => void;
  selectedSquare: Square | null;
};

export default ScorePanel;
