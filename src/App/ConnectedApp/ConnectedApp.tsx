import { FormEvent, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { socket } from '../../socket/Socket';
import { GameContext, PlayerContext, SocketContext } from '../../context/';
import { Button, LargeCard, LoadingSpinner, NameInputPanel, Title } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocalStorage } from '../../hooks';
import { GameRoom } from '../../components';
import AppContainer from '../AppContainer/AppContainer';
import { Colours } from '../../constants/colours';
import { SocketEvents } from '../../constants';
import styles from './ConnectedApp.module.css';

const ConnectedApp = () => {
  const [nickname, setNickname] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  const {
    getNicknameLocalStorage,
    setNicknameLocalStorage,
    getPlayerIdLocalStorage,
    setPlayerIdLocalStorage,
  } = useLocalStorage();

  const { isConnected } = useContext(SocketContext);
  const { roomId, players, isLoading, setIsLoading } = useContext(GameContext);
  const { player } = useContext(PlayerContext);

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const handleHomepageReturn = () => {
    socket.disconnect();
    navigate('/');
  };

  const handleOnClick = () => {
    const playerId = uuid();

    if (id && nickname) {
      setIsLoading(true);

      setNicknameLocalStorage(nickname);
      setPlayerIdLocalStorage(playerId);

      // join the room
      socket.emit(SocketEvents.ROOM_JOIN, {
        roomId: id,
        nickname,
        playerId,
      });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    if (!isConnected) {
      socket.connect();
    }

    if (isConnected && !roomId) {
      socket.emit(SocketEvents.ROOM_SEARCH, { roomId: id });
    }
  }, [id, isConnected, roomId, setIsLoading]);

  // checks if the player is already in the game (i.e. the user refreshes their browser / disconnects from the socket)
  useEffect(() => {
    const playerId = getPlayerIdLocalStorage();
    const nickname = getNicknameLocalStorage();

    if (isConnected && roomId && playerId && nickname && !player) {
      socket.emit(SocketEvents.PLAYER_SEARCH, { roomId, playerId, nickname });
    } else {
      setIsLoading(false);
    }
  }, [getNicknameLocalStorage, getPlayerIdLocalStorage, isConnected, player, roomId, setIsLoading]);

  if (isLoading) {
    return (
      <AppContainer>
        <LoadingSpinner colour={Colours.PINK} text='Joining room...' />;
      </AppContainer>
    );
  } else {
    if (isConnected && roomId && !player) {
      return (
        <AppContainer>
          <NameInputPanel
            buttonText='Join room'
            inputName='nameInputJoin'
            inputPlaceholder='Enter your nickname'
            labelText='To join the room, enter your nickname'
            onChange={handleInputChange}
            onClick={handleOnClick}
          />
        </AppContainer>
      );
    }

    if (isConnected && !roomId && !player) {
      return (
        <AppContainer>
          <LargeCard>
            <div className={styles.cardContentWrapper}>
              <Title size={30} />
              <div className={styles.cardContent}>
                <h2>Room not found</h2>
                <div className={styles.buttonWrapper}>
                  <Button text='Return to homepage' onClick={handleHomepageReturn} />
                </div>
              </div>
            </div>
          </LargeCard>
        </AppContainer>
      );
    }

    return (
      isConnected &&
      roomId &&
      player && (
        <AppContainer isConnected>
          <GameRoom players={players} roomId={roomId} player={player} />
        </AppContainer>
      )
    );
  }
};

export default ConnectedApp;
