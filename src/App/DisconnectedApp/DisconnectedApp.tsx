import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { socket } from '../../socket/Socket';
import { NameInputPanel } from '../../components';
import { GameContext } from '../../context/GameContext';
import DisconnectedAppContainer from './DisconnectedAppContainer/DisconnectedAppContainer';
import { RoomJoinResult } from '../../types/Socket';

const DisconnectedApp = () => {
  const [nickname, setNickname] = useState('');
  const { setPlayers } = useContext(GameContext);

  const navigate = useNavigate();

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const handleOnClick = () => {
    const roomId = uuid();

    if (nickname && roomId) {
      // connect to the websocket
      socket.connect();

      // create room
      socket.emit('room-create', { roomId });

      // join room
      socket.emit('room-join', { roomId, nickname });

      socket.on('room-join', ({ roomId, players }: RoomJoinResult) => {
        setPlayers(players);

        // naviate to game room
        navigate(`/room/${roomId}`);
      });
    } else {
      alert('Please enter a name');
    }
  };

  return (
    <DisconnectedAppContainer>
      <NameInputPanel
        buttonText='Create room'
        inputName='nameInput'
        inputPlaceholder='Enter your nickname'
        labelText=' To create a room, enter a nickname'
        onChange={handleInputChange}
        onClick={handleOnClick}
      />
    </DisconnectedAppContainer>
  );
};

export default DisconnectedApp;
