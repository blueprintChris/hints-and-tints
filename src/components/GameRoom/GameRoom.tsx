import { useContext } from 'react';
import { GridLoader } from 'react-spinners';
import GameBoard from './GameBoard/GameBoard';
import {
  ColourSelector,
  HintInput,
  LargeCard,
  SidePanel,
  Title,
  Modal,
  Welcome,
} from '../../components';
import { GameContext } from '../../context';
import { HINTER } from '../../constants/player';
import { Colours } from '../../constants/colours';
import { Player } from '../../types/Players';
import styles from './GameRoom.module.css';

const GameRoom = ({ players, roomId, player }: Props) => {
  const { gameState, isLoading, selectedColour } = useContext(GameContext);

  const hinter = players.find(pl => pl.role === HINTER);
  const isHinter = hinter?.id === player.id;

  const modalTitle = () => {
    if (isLoading) {
      return 'Hang tight, the game is starting...';
    } else {
      if (isHinter) {
        if (gameState === 'SELECTION') {
          return 'You are now the Hinter! Select a colour...';
        } else {
          return 'Enter a second hint for your colour';
        }
      } else {
        return 'Please wait...';
      }
    }
  };

  const modalSubtitle = (name?: string) => {
    if (!isLoading && !isHinter) {
      return `${name} is choosing a colour`;
    }
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
          {gameState === 'LOBBY' && <Welcome />}
          {gameState !== 'LOBBY' && gameState !== 'SELECTION' && <GameBoard />}
        </div>
        <div className={styles.sidePanelContainer}>
          <SidePanel players={players} />
        </div>
      </div>
      {(gameState === 'SELECTION' || gameState === 'SELECTION_TWO') && (
        <Modal title={modalTitle()} subTitle={modalSubtitle(hinter?.name)}>
          {isLoading && <GridLoader color={Colours.PINK} />}
          {!isLoading && (
            <>
              {isHinter && (
                <LargeCard>
                  {gameState === 'SELECTION' && <ColourSelector />}
                  {gameState === 'SELECTION_TWO' && <HintInput selectedColour={selectedColour} />}
                </LargeCard>
              )}
              {!isHinter && <GridLoader color={Colours.PINK} />}
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
