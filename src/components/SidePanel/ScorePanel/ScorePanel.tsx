import classnames from 'classnames';
import { Square } from '../../../constants/board';
import { HINTER, TINTER } from '../../../constants/player';
import { Player } from '../../../types/Players';
import { Button, PlayerList } from '../../../components';
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
      <div className={styles.playersContainer}>
        <h1>Hinter</h1>
        <PlayerList players={players} role={HINTER} showScores isHinter />
        <h1>Tinters</h1>
        <PlayerList players={players} role={TINTER} showScores currentTurn={currentTurn} />
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.hintWrapper}>
          <h1>Your Hint(s)</h1>
          <div
            className={classnames(styles.hintContainer, { [styles.hintContainerHinter]: isHinter })}
          >
            <div
              className={classnames(styles.textWrapper, { [styles.textWrapperHinter]: isHinter })}
            >
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
