import { useContext, useEffect, useState } from 'react';
import useSound from 'use-sound';
import classnames from 'classnames';
import { GridLoader } from 'react-spinners';
import ConfettiExplosion from 'react-confetti-explosion';
import { socket } from '../../socket/Socket';
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
import Rules from '../Welcome/Rules/Rules';
import { useDeviceWidth } from '../../hooks';
import SidePanel from './SidePanel/SidePanel';
import { GameContext } from '../../context';
import { PlayerRoles, Colours, GameStates, SocketEvents } from '../../constants';
import { Player } from '../../types/Players';
import chime from '../../sounds/turn.mp3';
import styles from './GameRoom.module.css';

const GameRoom = ({ players, player, spectators }: Props) => {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showPlayers, setShowPlayers] = useState(false);

  const [play] = useSound(chime);

  const { gameState, isLoading, selectedColour, winner, roomId, scoreLimit, currentTurn } =
    useContext(GameContext);

  const { isTablet } = useDeviceWidth();

  const hinter = players.find(pl => pl.role === PlayerRoles.HINTER);
  const isHinter = hinter?.id === player.id;

  const handleNewGame = () => {
    socket.emit(SocketEvents.GAME_START, { roomId });
  };

  const handleReturnToLobby = () => {
    socket.emit(SocketEvents.GAME_RESET, { roomId });
  };

  const handleShowRules = () => {
    setShowRules(!showRules);
  };

  const handleShowPlayers = () => {
    setShowPlayers(!showPlayers);
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

  useEffect(() => {
    if (
      currentTurn?.id === player?.id &&
      (gameState === GameStates.GUESSING_ONE || gameState === GameStates.GUESSING_TWO)
    ) {
      play();
    }
  }, [currentTurn?.id, gameState, play, player?.id]);

  return (
    <>
      <Header
        name={player.name}
        scoreLimit={scoreLimit}
        onRulesClick={handleShowRules}
        onPlayersClick={handleShowPlayers}
        players={players}
        spectators={spectators}
      />
      <div className={classnames(styles.content, { [styles.contentTablet]: isTablet })}>
        <div
          className={classnames(styles.boardContainer, { [styles.boardContainerTablet]: isTablet })}
        >
          {gameState === GameStates.LOBBY && <Welcome />}
          {gameState !== GameStates.LOBBY && gameState !== GameStates.SELECTION_ONE && (
            <GameBoard />
          )}
        </div>
        <div
          className={classnames(styles.sidePanelContainer, {
            [styles.sidePanelContainerTablet]: isTablet,
          })}
        >
          <SidePanel players={players} spectators={spectators} />
        </div>
      </div>
      {showRules && (
        <Modal isPermanent>
          <Rules onClose={handleShowRules} canClose />
        </Modal>
      )}
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
      {(gameState === GameStates.GUESSING_ONE || gameState === GameStates.GUESSING_TWO) &&
        currentTurn?.id === player.id &&
        isModalShowing && (
          <Modal title={player.name} subTitle='Your turn!' isPermanent>
            <div className={styles.buttonWrapper}>
              <Button text='Got it' onClick={() => setIsModalShowing(!isModalShowing)} />
            </div>
          </Modal>
        )}
      {gameState === GameStates.REVEAL && (
        <Modal title='Round ended' subTitle='Lets see how you did...' duration={2000}>
          <GridLoader color={Colours.PINK} />
        </Modal>
      )}
      {gameState === GameStates.GAME_END && winner && (
        <Modal title={`${winner.name} wins with ${winner.score} points!`} isPermanent>
          <ConfettiExplosion force={0.8} duration={5000} particleCount={250} width={1900} />
          <div className={styles.buttonWrapper}>
            <Button text='Play again with same players' onClick={handleNewGame} />
            <Button text='Return to lobby' onClick={handleReturnToLobby} />
          </div>
        </Modal>
      )}
    </>
  );
};

type Props = {
  players: Player[];
  spectators: Player[];
  roomId: string;
  player: Player;
};

export default GameRoom;
