import * as React from 'react';
import { Players } from '../../types/Players';

const PlayerList = ({ players }: Props) => {
  return (
    <div>
      <ul>
        {players.map(player => {
          return <li key={player.id}>{player.name}</li>;
        })}
      </ul>
    </div>
  );
};

type Props = {
  players: Players;
};

export default PlayerList;
