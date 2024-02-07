import { FormEvent, useContext, useEffect, useState } from 'react';
import { socket } from '../../socket/Socket';
import { GameContext, PlayerContext, SocketContext } from '../../context/';
import { NameInputPanel } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import GameRoom from '../../components/GameRoom/GameRoom';
import DisconnectedAppContainer from '../DisconnectedApp/DisconnectedAppContainer/DisconnectedAppContainer';
import { RoomJoinResult } from '../../types/Socket';

const ConnectedApp = () => {
  const [nickname, setNickname] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  const { isConnected } = useContext(SocketContext);
  const { roomId, setRoomId, players, setPlayers } = useContext(GameContext);
  const { player, setPlayer } = useContext(PlayerContext);

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const handleHomepageReturn = () => {
    socket.disconnect();
    navigate('/');
  };

  const handleOnClick = () => {
    if (id) {
      // join the room
      socket.emit('room-join', { roomId: id, nickname });
    }
  };

  useEffect(() => {
    if (!isConnected) {
      socket.connect();
    }
  }, [isConnected]);

  useEffect(() => {
    socket.emit('room-search', { roomId: id });

    socket.on('room-search', ({ doesRoomExist, roomId: id }) => {
      if (doesRoomExist) {
        setRoomId(id);
      } else {
        setRoomId('');
      }
    });
  }, [id, player, setRoomId, roomId]);

  if (isConnected && !roomId) {
    return (
      <div>
        <h1>Room not found</h1>
        <button onClick={handleHomepageReturn}>Return to Homepage</button>
      </div>
    );
  }

  if (isConnected && roomId && !player) {
    return (
      <DisconnectedAppContainer>
        <NameInputPanel
          buttonText='Join room'
          inputName='nameInputJoin'
          inputPlaceholder='Enter your nickname'
          labelText='To join the room, enter your nickname'
          onChange={handleInputChange}
          onClick={handleOnClick}
        />
      </DisconnectedAppContainer>
    );
  }

  return (
    isConnected &&
    roomId &&
    player && <GameRoom players={players} roomId={roomId} player={player} />
  );
};

export default ConnectedApp;
