import { useContext, useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';
import classnames from 'classnames';
import PlayerItem from './PlayerItem/PlayerItem';
import { GameContext } from '../../../../context';
import { Player } from '../../../../types/Players';
import styles from './PlayerList.module.css';

const PlayerList = ({ players, showScores, role, isHinter, currentTurn }: Props) => {
  const [sortedPlayers, setSortedPlayers] = useState(players);

  const { gameState, isLoading } = useContext(GameContext);

  useEffect(() => {
    if (!isLoading) {
      const updatedPlayers = [...players];
      updatedPlayers.sort((a, b) => b.score - a.score);

      setSortedPlayers(updatedPlayers);
    }
  }, [isLoading, players]);

  return (
    <div className={classnames(styles.playerContainer, { [styles.hinter]: isHinter })}>
      <FlipMove enterAnimation='fade'>
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
