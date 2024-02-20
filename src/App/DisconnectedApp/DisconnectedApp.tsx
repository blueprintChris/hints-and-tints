import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { socket } from '../../socket/Socket';
import { useLocalStorage } from '../../hooks';
import { LoadingSpinner, NameInputPanel } from '../../components';
import { GameContext } from '../../context/GameContext';
import AppContainer from '../AppContainer/AppContainer';
import { Colours } from '../../constants/colours';
import { SocketEvents } from '../../constants';
import { Action } from '../../reducer/Action';
import { RoomJoinResult } from '../../types/Socket';
import { PlayerContext } from '../../context';

const DisconnectedApp = () => {
  const [setNicknameLocalStorage, nicknameLocalStorage] = useLocalStorage('nickname');
  const [setPlayerIdLocalStorage] = useLocalStorage('playerId');

  const [nickname, setNickname] = useState(nicknameLocalStorage);

  const { dispatch, isLoading } = useContext(GameContext);
  const { setIsInRoom } = useContext(PlayerContext);

  const navigate = useNavigate();

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const handleOnClick = async () => {
    if (nickname) {
      dispatch({ type: Action.LOADING });

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
        dispatch({ type: Action.ROOM_JOIN, payload });
        setIsInRoom(true);

        navigate(`/room/${payload.roomId}`);
      });
    } else {
      alert('Please enter a name');
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
        />
      )}
    </AppContainer>
  );
};

export default DisconnectedApp;
