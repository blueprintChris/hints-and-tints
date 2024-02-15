import { useContext } from 'react';
import { GridLoader } from 'react-spinners';
import ConfettiExplosion from 'react-confetti-explosion';
import GameBoard from './GameBoard/GameBoard';
import {
  ColourSelector,
  HintInput,
  LargeCard,
  Modal,
  Welcome,
  Button,
  Header,
} from '../../components';
import SidePanel from './SidePanel/SidePanel';
import { GameContext } from '../../context';
import { HINTER } from '../../constants/player';
import { Colours } from '../../constants/colours';
import { GameStates, SocketEvents } from '../../constants';
import { Player } from '../../types/Players';
import styles from './GameRoom.module.css';
import { socket } from '../../socket/Socket';

const GameRoom = ({ players, player }: Props) => {
  const { gameState, isLoading, selectedColour, winner, roomId, scoreLimit } =
    useContext(GameContext);

  const hinter = players.find(pl => pl.role === HINTER);
  const isHinter = hinter?.id === player.id;

  console.log('is hinter: ', isHinter);
  console.log('game state: ', gameState);

  const handleNewGame = () => {
    socket.emit(SocketEvents.GAME_START, { roomId });
  };

  const modalTitle = () => {
    if (isLoading) {
      return 'Hang tight, the game is starting...';
    } else {
      if (isHinter) {
        if (gameState === GameStates.SELECTION_ONE) {
          return 'You are the Hinter!';
        } else {
          return 'Enter a second hint';
        }
      } else {
        return 'Please wait...';
      }
    }
  };

  const modalSubtitle = (name?: string) => {
    if (!isLoading && isHinter) {
      if (gameState === GameStates.SELECTION_ONE) {
        return 'Select a colour...';
      }

      if (gameState === GameStates.SELECTION_TWO) {
        return `Try to get players closer to your colour!`;
      }
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
      <Header name={player.name} scoreLimit={scoreLimit} />
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
        <Modal title={modalTitle()} subTitle={modalSubtitle(hinter?.name)} isPermanent>
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
      {gameState === GameStates.SCORING && (
        <Modal title='Round ended' subTitle='Lets see how you did...' duration={2000}>
          <GridLoader color={Colours.PINK} />
        </Modal>
      )}
      {gameState === GameStates.GAME_END && winner && (
        <Modal title={`${winner.name} wins with ${winner.score} points!`} isPermanent>
          <ConfettiExplosion force={0.8} duration={5000} particleCount={250} width={1900} />
          <div className={styles.buttonWrapper}>
            <Button text='New Game' onClick={handleNewGame} />
          </div>
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
