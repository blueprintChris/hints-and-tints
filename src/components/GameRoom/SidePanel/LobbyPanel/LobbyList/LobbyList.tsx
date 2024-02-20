import { Players } from '../../../../../types/Players';
import styles from './LobbyList.module.css';

const LobbyList = ({ spectators }: Props) => {
  return (
    <div className={styles.playerList}>
      <h1>Spectators</h1>
      <ul>
        {spectators.length === 0 ? (
          <li>No one else here 😔</li>
        ) : (
          spectators.map(spectator => {
            return <li key={spectator.id}>{spectator.name}</li>;
          })
        )}
      </ul>
    </div>
  );
};

type Props = {
  spectators: Players;
};

export default LobbyList;
