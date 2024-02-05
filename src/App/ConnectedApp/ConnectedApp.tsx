import { FormEvent, useContext, useEffect, useState } from 'react';
import { socket } from '../../socket/Socket';
import { GameContext, PlayerContext, PlayerContextProvider, SocketContext } from '../../context/';
import { GameBoard, NameInputPanel, SidePanel, Title } from '../../components';
import styles from './ConnectedApp.module.css';
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
  const { roomId, setRoomId, players, setPlayers } = useContext(GameContext);
  const { player, setPlayer } = useContext(PlayerContext);

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const updatePlayerList = (player: Player) => {
    const tempPlayers = [...players];
    tempPlayers.push(player);
    setPlayers(tempPlayers);
  };

  const handleHomepageReturn = () => {
    navigate('/');
  };

  const handleOnClick = () => {
    if (id) {
      setRoomId(id);

      const player = {
        name: nickname,
        score: 0,
        id: 1,
        turn: 1,
        isTurn: false,
        isClueGiver: false,
      };

      setPlayer(player);
      updatePlayerList(player);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    if (!isConnected) {
      socket.connect();
    }

    if (!roomId) {
      socket.emit('room-search', { roomId: id });

      socket.on('room-search-complete', ({ doesRoomExist }) => {
        console.log(`room search complete ${doesRoomExist}`);

        if (doesRoomExist) {
          console.log('room exists, joining...');
          socket.emit('room-join', { roomId: id });

          socket.on('room-joined', ({ roomId: id }) => {
            setRoomId(id);
          });
        }
      });
    }

    setIsLoading(false);
  }, []);

  if (roomId && !player) {
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
    <>
      {isLoading && <div>Loading...</div>}
      {isConnected && roomId && player ? (
        <GameRoom players={players} roomId={roomId} />
      ) : (
        <div>
          <h1>Room not found</h1>
          <button onClick={handleHomepageReturn}>Return to Homepage</button>
        </div>
      )}
    </>
  );
};

export default ConnectedApp;
