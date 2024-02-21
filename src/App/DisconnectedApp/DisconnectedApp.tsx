import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import { socket } from '../../socket/Socket';
import { useLocalStorage } from '../../hooks';
import { LoadingSpinner, NameInputPanel } from '../../components';
import { GameContext } from '../../context/GameContext';
import AppContainer from '../AppContainer/AppContainer';
import { Colours } from '../../constants/colours';
import { SocketEvents } from '../../constants';
import { GameAction } from '../../reducers/game/Action';
import { RoomJoinResult } from '../../types/Socket';
import { PlayerContext } from '../../context';
import { PlayerAction } from '../../reducers/player/Action';

import 'react-toastify/dist/ReactToastify.css';

const DisconnectedApp = () => {
  const [setNicknameLocalStorage, nicknameLocalStorage] = useLocalStorage('nickname');
  const [setPlayerIdLocalStorage] = useLocalStorage('playerId');

  const [nickname, setNickname] = useState(nicknameLocalStorage);

  const { dispatch: gameDispatch, isLoading } = useContext(GameContext);
  const { dispatch: playerDispatch } = useContext(PlayerContext);

  const navigate = useNavigate();

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const handleOnClick = async () => {
    if (nickname) {
      gameDispatch({ type: GameAction.LOADING });

      const newRoomId = uuid();
      const newPlayerId = uuid();

      // store player values in local storage
      setNicknameLocalStorage(nickname);
      setPlayerIdLocalStorage(newPlayerId);

      // connect to the websocket
      socket.connect();

      // create room
      socket.emit(SocketEvents.ROOM_CREATE, { roomId: newRoomId });

      // join room
      socket.emit(SocketEvents.ROOM_JOIN, { roomId: newRoomId, nickname, playerId: newPlayerId });

      // listen to room join event
      socket.on(SocketEvents.ROOM_JOIN, (payload: RoomJoinResult) => {
        gameDispatch({ type: GameAction.ROOM_JOIN, payload });

        playerDispatch({ type: PlayerAction.PLAYER_SEARCH, payload: { isInRoom: true } });

        navigate(`/room/${payload.roomId}`);
      });
    } else {
      toast('😒 Please enter a name', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
    }
  };

  return (
    <AppContainer>
      {isLoading && <LoadingSpinner colour={Colours.PINK} text='Constructing room...' />}
      {!isLoading && (
        <NameInputPanel
          buttonText='Create room'
          inputName='nameInput'
          inputPlaceholder='Enter your nickname'
          labelText='To create a room, enter a nickname'
          onChange={handleInputChange}
          onClick={handleOnClick}
          defaultValue={nickname}
        />
      )}
      <ToastContainer limit={1} />
    </AppContainer>
  );
};

export default DisconnectedApp;
