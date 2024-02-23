import { useContext, useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';
import classnames from 'classnames';
import { useDeviceWidth } from '../../../../hooks';

import { GameContext } from '../../../../context';
import PlayerItem from './PlayerItem/PlayerItem';
import { Player } from '../../../../types/Players';
import styles from './PlayerList.module.css';
import { GameStates } from '../../../../constants';

const PlayerList = ({ players, showScores, role, isHinter, currentTurn }: Props) => {
  const [sortedPlayers, setSortedPlayers] = useState<Player[]>(players);

  const { gameState, isLoading } = useContext(GameContext);
  const { isTablet } = useDeviceWidth();

  useEffect(() => {
    if (gameState !== GameStates.REVEAL) {
      const updatedPlayers = [...players].sort((a, b) => b.score - a.score);
      setSortedPlayers(updatedPlayers);
    }
  }, [gameState, isLoading, players]);

  return (
    <div
      className={classnames(styles.playerContainer, {
        [styles.hinter]: isHinter,
        [styles.playerContainerTablet]: isTablet,
      })}
    >
      <FlipMove>
        {sortedPlayers.map(
          pl =>
            pl.role === role && (
              <PlayerItem
                player={pl}
                currentTurn={currentTurn}
                gameState={gameState}
                showScores={showScores}
                key={pl.id}
              />
            )
        )}
      </FlipMove>
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
