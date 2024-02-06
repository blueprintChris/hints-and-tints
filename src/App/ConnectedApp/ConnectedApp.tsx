import { FormEvent, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { socket } from '../../socket/Socket';
import { GameContext, PlayerContext, SocketContext } from '../../context/';
import { NameInputPanel } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import GameRoom from '../../components/GameRoom/GameRoom';
import DisconnectedAppContainer from '../DisconnectedApp/DisconnectedAppContainer/DisconnectedAppContainer';
import { Player } from '../../types/Players';

const ConnectedApp = () => {
  const [nickname, setNickname] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const { isConnected } = useContext(SocketContext);
  const { roomId, setRoomId, players } = useContext(GameContext);
  const { player, setPlayer } = useContext(PlayerContext);

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const handleHomepageReturn = () => {
    navigate('/');
  };

  const handleOnClick = () => {
    if (id) {
      const player = {
        name: nickname,
        score: 0,
        id: uuid(),
        turn: 1,
        isTurn: false,
        isClueGiver: false,
      };

      setRoomId(id);
      setPlayer(player);

      const playerList = [...players];
      console.log(playerList);
      playerList.push(player);

      socket.emit('room-join', { roomId: id, nickname, playerList });
    }
  };

  useEffect(() => {
    if (!isConnected) {
      socket.connect();
    }
  }, [isConnected]);

  useEffect(() => {
    if (!roomId) {
      socket.emit('room-search', { roomId: id });

      socket.on('room-search', ({ doesRoomExist, roomId: id }) => {
        if (doesRoomExist) {
          setRoomId(id);
        }
      });
    }
  }, [id, player, setRoomId, roomId]);

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

  return isConnected && roomId && player ? (
    <GameRoom players={players} roomId={roomId} />
  ) : (
    <div>
      <h1>Room not found</h1>
      <button onClick={handleHomepageReturn}>Return to Homepage</button>
    </div>
  );
};

export default ConnectedApp;
