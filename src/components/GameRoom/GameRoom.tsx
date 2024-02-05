import GameBoard from './GameBoard/GameBoard';
import { SidePanel, Title } from '../../components';
import { Player } from '../../types/Players';
import styles from './GameRoom.module.css';

const GameRoom = ({ players, roomId }: Props) => {
  return (
    <>
      <div className={styles.header}>
        <Title size={10} orientation='row' />
        <span className={styles.roomId}>Room ID: {roomId}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.boardContainer}>
          <GameBoard />
        </div>
        <div className={styles.sidePanelContainer}>
          <SidePanel players={players} />
        </div>
      </div>
    </>
  );
};

type Props = {
  players: Player[];
  roomId: string;
};

export default GameRoom;
