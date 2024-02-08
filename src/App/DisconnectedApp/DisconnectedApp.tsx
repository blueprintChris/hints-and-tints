import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { socket } from '../../socket/Socket';
import { LoadingSpinner, NameInputPanel } from '../../components';
import { GameContext } from '../../context/GameContext';
import DisconnectedAppContainer from './DisconnectedAppContainer/DisconnectedAppContainer';
import { Colours } from '../../constants/colours';

const DisconnectedApp = () => {
  const [nickname, setNickname] = useState('');
  const { setIsLoading, isLoading } = useContext(GameContext);

  const navigate = useNavigate();

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const handleOnClick = () => {
    setIsLoading(true);

    const roomId = uuid();

    if (nickname && roomId) {
      // connect to the websocket
      socket.connect();

      // create room
      socket.emit('room-create', { roomId });

      // join room
      socket.emit('room-join', { roomId, nickname });

      // simulate loading
      setTimeout(() => {
        // naviate to game room
        setIsLoading(false);
        navigate(`/room/${roomId}`);
      }, 3000);
    } else {
      alert('Please enter a name');
    }
  };

  return (
    <DisconnectedAppContainer>
      {isLoading && <LoadingSpinner colour={Colours.PINK} text='Constructing room...' />}
      {!isLoading && (
        <NameInputPanel
          buttonText='Create room'
          inputName='nameInput'
          inputPlaceholder='Enter your nickname'
          labelText=' To create a room, enter a nickname'
          onChange={handleInputChange}
          onClick={handleOnClick}
        />
      )}
    </DisconnectedAppContainer>
  );
};

export default DisconnectedApp;
