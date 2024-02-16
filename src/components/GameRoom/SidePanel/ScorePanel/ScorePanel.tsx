import { Square } from '../../../../constants/board';
import { HINTER, TINTER } from '../../../../constants/player';
import { Player } from '../../../../types/Players';
import { Button, PlayerList } from '../../../../components';
import { Colours, GameStates } from '../../../../constants';
import Hints from './Hints/Hints';
import styles from './ScorePanel.module.css';

const ScorePanel = ({
  players,
  player,
  firstHint,
  secondHint,
  selectedColour,
  currentTurn,
  onEndTurnClick,
  onNextRoundClick,
  selectedSquare,
  gameState,
}: Props) => {
  const hinter = players.find(pl => pl.role === HINTER);
  const isHinter = hinter?.id === player?.id;

  const canGoNextRound = () => gameState === GameStates.SCORING;

  return (
    <div className={styles.scorePanel}>
      <div className={styles.playersContainer}>
        <h1>Hinter</h1>
        <PlayerList players={players} role={HINTER} showScores isHinter />
        <h1>Tinters</h1>
        <PlayerList players={players} role={TINTER} showScores currentTurn={currentTurn} />
      </div>
      <div className={styles.bottomWrapper}>
        {gameState !== GameStates.SELECTION_ONE && (
          <Hints
            isHinter={isHinter}
            firstHint={firstHint}
            secondHint={secondHint}
            selectedColour={selectedColour}
          />
        )}
        <div className={styles.buttonContainer}>
          {gameState === GameStates.SCORING || gameState === GameStates.GAME_END ? (
            <Button
              onClick={onNextRoundClick}
              text='Next Round'
              colour={Colours.GREEN}
              disabled={!canGoNextRound()}
            />
          ) : (
            <Button
              onClick={onEndTurnClick}
              text='End Turn'
              disabled={
                currentTurn?.id !== player?.id ||
                !selectedSquare ||
                gameState === GameStates.SELECTION_ONE ||
                gameState === GameStates.SELECTION_TWO ||
                gameState === GameStates.REVEAL
              }
            />
          )}
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
  onNextRoundClick: () => void;
  selectedSquare: Square | null;
  gameState: string;
  isLoading: boolean;
};

export default ScorePanel;
