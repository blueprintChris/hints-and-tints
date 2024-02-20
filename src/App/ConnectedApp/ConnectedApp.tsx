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
import { Action } from '../../reducer/Action';
import { RoomJoinResult } from '../../types/Socket';

const ConnectedApp = () => {
  const [setNicknameLocalStorage, nicknameLocalStorage] = useLocalStorage('nickname', '');
  const [setPlayerIdLocalStorage, playerIdLocalStorage] = useLocalStorage('playerId', '');

  const [nickname, setNickname] = useState(nicknameLocalStorage);

  const { id } = useParams();
  const navigate = useNavigate();

  const { isConnected } = useContext(SocketContext);
  const { roomId, players, spectators, isLoading, dispatch } = useContext(GameContext);
  const { player, isInRoom } = useContext(PlayerContext);

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
      dispatch({ type: Action.LOADING });

      setNicknameLocalStorage(nickname);
      setPlayerIdLocalStorage(playerId);

      // join the room
      socket.emit(SocketEvents.ROOM_JOIN, {
        roomId: id,
        nickname,
        playerId,
      });

      socket.on(SocketEvents.ROOM_JOIN, (payload: RoomJoinResult) => {
        dispatch({ type: Action.ROOM_JOIN, payload });
      });
    } else {
      alert('Please enter a name');
    }
  };

  // if a player is given a link, we have to connect to the socket first
  useEffect(() => {
    if (!isConnected) {
      socket.connect();
    }
  }, [isConnected]);

  // a search for the room must be done if the player has been given a link
  useEffect(() => {
    if (isConnected && !roomId) {
      socket.emit(SocketEvents.ROOM_SEARCH, { roomId: id });
    }
  }, [id, isConnected, roomId]);

  // checks if the player is already in the game (i.e. the user refreshes their browser / disconnects from the socket)
  useEffect(() => {
    if (isConnected && roomId && playerIdLocalStorage && nicknameLocalStorage && !isInRoom) {
      socket.emit(SocketEvents.PLAYER_SEARCH, {
        roomId,
        playerId: playerIdLocalStorage,
        nickname: nicknameLocalStorage,
      });
    }
  }, [isConnected, isInRoom, nicknameLocalStorage, playerIdLocalStorage, roomId]);

  // gets the room data if we dont have a player object from joining room
  useEffect(() => {
    if (isInRoom && !player) {
      socket.emit(SocketEvents.ROOM_GET, { roomId, playerId: playerIdLocalStorage });
    }
  }, [dispatch, isInRoom, player, playerIdLocalStorage, roomId]);

  if (isLoading) {
    return (
      <AppContainer>
        <LoadingSpinner colour={Colours.PINK} text='Joining room...' />;
      </AppContainer>
    );
  } else {
    if (isConnected && roomId && !isInRoom) {
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

    if (isConnected && !roomId && !isInRoom) {
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
          <GameRoom players={players} roomId={roomId} player={player} spectators={spectators} />
        </AppContainer>
      )
    );
  }
};

export default ConnectedApp;
