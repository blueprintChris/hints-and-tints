import * as React from 'react';
import { Players } from '../../types/Players';

const PlayerList = ({ players }: Props) => {
  const clueGivers = players.filter(player => player.isClueGiver === true);
  return (
    <div>
      <h1>Clue Giver</h1>
      {clueGivers.map(giver => (
        <p>{giver.name}</p>
      ))}
      <h1>Guessers</h1>
      <ul>
        {players.map(player => {
          return (
            !player.isClueGiver && (
              <li>
                {player.name}: {player.score}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

type Props = {
  players: Players;
};

export default PlayerList;
