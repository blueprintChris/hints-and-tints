import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { socket } from '../../socket/Socket';
import { useLocalStorage } from '../../hooks';
import { Dropdown, LoadingSpinner, NameInputPanel } from '../../components';
import { GameContext } from '../../context/GameContext';
import AppContainer from '../AppContainer/AppContainer';
import { Colours } from '../../constants/colours';
import { SocketEvents } from '../../constants';

const DisconnectedApp = () => {
  const [nickname, setNickname] = useState('');
  const [scoreLimit, setScoreLimit] = useState(50);

  const { setIsLoading, isLoading } = useContext(GameContext);

  const navigate = useNavigate();

  const { setNicknameLocalStorage, setPlayerIdLocalStorage } = useLocalStorage();

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const handleScoreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const number = parseInt(e.currentTarget.value);
    setScoreLimit(number);
  };

  const handleOnClick = () => {
    const roomId = uuid();
    const playerId = uuid();

    if (nickname && roomId && playerId) {
      setIsLoading(true);

      // store player values in local storage
      setPlayerIdLocalStorage(playerId);
      setNicknameLocalStorage(nickname);

      // connect to the websocket
      socket.connect();

      // create room
      socket.emit(SocketEvents.ROOM_CREATE, { roomId, scoreLimit });

      // join room
      socket.emit(SocketEvents.ROOM_JOIN, { roomId, nickname, playerId });

      navigate(`/room/${roomId}`);
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
