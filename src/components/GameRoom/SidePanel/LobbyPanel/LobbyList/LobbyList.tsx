import { Players } from '../../../../../types/Players';
import styles from './LobbyList.module.css';

const LobbyList = ({ players }: Props) => {
  return (
    <div className={styles.playerList}>
      <h1>In Lobby</h1>
      <ul>
        {players.map(player => {
          return (
            <li key={player.id}>
              {player.name} {player.role && '✅'}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

type Props = {
  players: Players;
};

export default LobbyList;
