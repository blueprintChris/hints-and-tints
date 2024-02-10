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
import { GameStates } from '../../constants';

const GameRoom = ({ players, player }: Props) => {
  const { gameState, isLoading, selectedColour } = useContext(GameContext);

  const hinter = players.find(pl => pl.role === HINTER);
  const isHinter = hinter?.id === player.id;

  const modalTitle = () => {
    if (isLoading) {
      return 'Hang tight, the game is starting...';
    } else {
      if (isHinter) {
        if (gameState === GameStates.SELECTION_ONE) {
          return 'You are the Hinter!';
        } else {
          return 'Enter a second hint for your colour';
        }
      } else {
        return 'Please wait...';
      }
    }
  };

  const modalSubtitle = (name?: string) => {
    if (!isLoading && isHinter) {
      return 'Select a colour...';
    }
    if (!isLoading && !isHinter) {
      if (gameState === GameStates.SELECTION_ONE) {
        return `${name} is choosing a colour`;
      }
      if (gameState === GameStates.SELECTION_TWO) {
        return `${name} is choosing another hint`;
      }
    }
  };

  return (
    <>
      <div className={styles.header}>
        <Title size={8} orientation='row' />
        <div className={styles.playerWrapper}>
          <span className={styles.roomId}>{player.name}</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.boardContainer}>
          {gameState === GameStates.LOBBY && <Welcome />}
          {gameState !== GameStates.LOBBY && gameState !== GameStates.SELECTION_ONE && (
            <GameBoard />
          )}
        </div>
        <div className={styles.sidePanelContainer}>
          <SidePanel players={players} />
        </div>
      </div>
      {(gameState === GameStates.SELECTION_ONE || gameState === GameStates.SELECTION_TWO) && (
        <Modal title={modalTitle()} subTitle={modalSubtitle(hinter?.name)}>
          {isLoading && <GridLoader color={Colours.PINK} />}
          {!isLoading && (
            <>
              {isHinter && (
                <LargeCard>
                  {gameState === GameStates.SELECTION_ONE && <ColourSelector />}
                  {gameState === GameStates.SELECTION_TWO && (
                    <HintInput selectedColour={selectedColour} />
                  )}
                </LargeCard>
              )}
              {!isHinter && <GridLoader color={Colours.PINK} />}
            </>
          )}
        </Modal>
      )}

      {gameState === GameStates.SCORING && isLoading && (
        <Modal title='Round ended' subTitle='Lets see how you did...'>
          <GridLoader color={Colours.PINK} />
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
