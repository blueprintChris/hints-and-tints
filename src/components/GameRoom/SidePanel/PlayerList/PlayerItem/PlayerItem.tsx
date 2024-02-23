import classnames from 'classnames';
import { Player } from '../../../../../types/Players';
import PlayerScore from './PlayerScore/PlayerScore';
import styles from './PlayerItem.module.css';
import { forwardRef } from 'react';

const PlayerItem = forwardRef(
  (
    { player, gameState, showScores, currentTurn }: Props,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={classnames(styles.player, { [styles.current]: currentTurn?.id === player.id })}
        ref={ref}
        key={player.id}
      >
        <div className={styles.playerColourWrapper}>
          <div className={styles.playerColour} style={{ backgroundColor: player.colour }} />
          <span>{player.name}</span>
        </div>
        {showScores && (
          <PlayerScore gameState={gameState} score={player.score} prevScore={player.prevScore} />
        )}
      </div>
    );
  }
);

type Props = {
  player: Player;
  currentTurn?: Player | null;
  gameState: string;
  showScores?: boolean;
  isLoading?: boolean;
};

export default PlayerItem;
