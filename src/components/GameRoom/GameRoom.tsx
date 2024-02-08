import { GridLoader } from 'react-spinners';
import GameBoard from './GameBoard/GameBoard';
import { ColourSelector, LargeCard, SidePanel, Title } from '../../components';
import { Player } from '../../types/Players';
import styles from './GameRoom.module.css';
import { useContext } from 'react';
import { GameContext } from '../../context';
import { HINTER } from '../../constants/player';
import Modal from '../Modal/Modal';

const GameRoom = ({ players, roomId, player }: Props) => {
  const { gameState, isLoading } = useContext(GameContext);

  const hinter = players.find(pl => pl.role === HINTER);
  const isHinter = hinter?.role === player.role;

  const modalTitle = () => {
    if (isLoading) {
      return 'Hang tight, the game is starting...';
    } else {
      if (isHinter) {
        return 'Select a colour';
      } else {
        return 'Please wait...';
      }
    }
  };

  const modalSubtitle = (name?: string) => {
    if (!isLoading && !isHinter) {
      return `${name} is choosing a colour`;
    }

    return '';
  };

  return (
    <>
      <div className={styles.header}>
        <Title size={10} orientation='row' />
        <span className={styles.roomId}>{player.name}</span>
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
      {gameState === 'SELECTION' && (
        <Modal title={modalTitle()} subTitle={modalSubtitle(hinter?.name)}>
          {isLoading && <GridLoader color='#e76fac' />}
          {!isLoading && (
            <>
              {isHinter && (
                <LargeCard>
                  <ColourSelector />
                </LargeCard>
              )}
              {!isHinter && <GridLoader color='#e76fac' />}
            </>
          )}
        </Modal>
      )}
    </>
  );
};

type Props = {
  players: Player[];
  roomId: string;
  player: Player;
};

export default GameRoom;
