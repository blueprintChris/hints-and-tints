import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { socket } from '../../socket/Socket';
import { NameInputPanel } from '../../components';
import { GameContext } from '../../context/GameContext';
import { PlayerContext } from '../../context';
import { Player } from '../../types/Players';
import DisconnectedAppContainer from './DisconnectedAppContainer/DisconnectedAppContainer';

const DisconnectedApp = () => {
  const [nickname, setNickname] = useState('');
  const { setRoomId, players } = useContext(GameContext);
  const { setPlayer } = useContext(PlayerContext);

  const navigate = useNavigate();

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const updatePlayerList = (player: Player) => {
    const tempPlayers = [...players];
    tempPlayers.push(player);
    return tempPlayers;
  };

  const handleOnClick = () => {
    const roomId = uuid();

    if (nickname && roomId) {
      const player = {
        name: nickname,
        score: 0,
        id: uuid(),
        turn: 0,
        isTurn: true,
        isClueGiver: true,
      };

      setPlayer(player);
      const playerList = updatePlayerList(player);

      socket.connect();
      socket.emit('room-join', { roomId, nickname, playerList });

      socket.on('room-join', ({ roomId }) => {
        setRoomId(roomId);

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
