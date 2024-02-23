import classnames from 'classnames';
import { useDeviceWidth } from '../../../../hooks';
import { Button, PlayerList } from '../../../../components';
import { Colours, GameStates } from '../../../../constants';
import Hints from './Hints/Hints';
import { Square } from '../../../../constants/board';
import { PlayerRoles } from '../../../../constants';
import { Player } from '../../../../types/Players';
import styles from './ScorePanel.module.css';

const ScorePanel = ({
  players,
  player,
  firstHint,
  secondHint,
  selectedColour,
  currentTurn,
  onJoinClick,
  onEndTurnClick,
  onNextRoundClick,
  selectedSquare,
  gameState,
}: Props) => {
  const { isTablet } = useDeviceWidth();

  const hinter = players.find(pl => pl.role === PlayerRoles.HINTER);
  const isHinter = hinter?.id === player?.id;

  const canGoNextRound = () => gameState === GameStates.SCORING && isHinter;

  const canEndturn = () =>
    currentTurn?.id === player?.id &&
    selectedSquare &&
    (gameState === GameStates.GUESSING_ONE || gameState === GameStates.GUESSING_TWO);

  return (
    <div className={classnames(styles.scorePanel, { [styles.scorePanelTablet]: isTablet })}>
      <div
        className={classnames(styles.playersContainer, {
          [styles.playersContainerTablet]: isTablet,
        })}
      >
        <div
          className={classnames(styles.playerRoleContainer, {
            [styles.playerRoleContainerTablet]: isTablet,
          })}
        >
          <h1>Hinter</h1>
          <PlayerList players={players} role={PlayerRoles.HINTER} showScores isHinter />
        </div>
        <div
          className={classnames(styles.playerRoleContainer, {
            [styles.playerRoleContainerTablet]: isTablet,
          })}
        >
          <h1>Tinters</h1>
          <PlayerList
            players={players}
            role={PlayerRoles.TINTER}
            showScores
            currentTurn={currentTurn}
          />
        </div>
        {player?.role === PlayerRoles.SPECTATOR && (
          <div className={styles.buttonWrapper}>
            <Button
              onClick={onJoinClick}
              text='Join game'
              disabled={player?.role !== PlayerRoles.SPECTATOR}
            />
          </div>
        )}
      </div>
      <div className={classnames(styles.bottomWrapper, { [styles.bottomWrapperTablet]: isTablet })}>
        {gameState !== GameStates.SELECTION_ONE && (
          <Hints
            isHinter={isHinter}
            firstHint={firstHint}
            secondHint={secondHint}
            selectedColour={selectedColour}
          />
        )}
        <div
          className={classnames(styles.buttonContainer, {
            [styles.buttonGlow]: canEndturn() || canGoNextRound(),
          })}
        >
          {gameState === GameStates.SCORING || gameState === GameStates.GAME_END ? (
            <Button
              onClick={onNextRoundClick}
              text='Next Round'
              colour={Colours.GREEN}
              disabled={!canGoNextRound()}
            />
          ) : (
            <Button onClick={onEndTurnClick} text='End Turn' disabled={!canEndturn()} />
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
  onJoinClick: () => void;
  onEndTurnClick: () => void;
  onNextRoundClick: () => void;
  selectedSquare: Square | null;
  gameState: string;
  isLoading: boolean;
};

export default ScorePanel;
