import { FormEvent, useContext, useEffect, useState } from 'react';
import { socket } from '../../socket/Socket';
import { GameContext, PlayerContext, SocketContext } from '../../context/';
import { Button, LargeCard, LoadingSpinner, NameInputPanel, Title } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import GameRoom from '../../components/GameRoom/GameRoom';
import AppContainer from '../AppContainer/AppContainer';
import { Colours } from '../../constants/colours';
import { SocketEvents } from '../../constants';
import styles from './ConnectedApp.module.css';

const ConnectedApp = () => {
  const [nickname, setNickname] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  const { isConnected } = useContext(SocketContext);
  const { roomId, players, isLoading, setIsLoading } = useContext(GameContext);
  const { player } = useContext(PlayerContext);

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const handleHomepageReturn = () => {
    socket.disconnect();
    navigate('/');
  };

  const handleOnClick = () => {
    if (id && nickname) {
      setIsLoading(true);
      // join the room
      socket.emit(SocketEvents.ROOM_JOIN, { roomId: id, nickname });
    }
  };

  useEffect(() => {
    if (!isConnected) {
      socket.connect();
    }

    if (isConnected && !roomId) {
      socket.emit(SocketEvents.ROOM_SEARCH, { roomId: id });
    }
  }, [id, isConnected, roomId]);

  if (isConnected && !roomId) {
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

  if (isConnected && roomId && !player) {
    return (
      <AppContainer>
        {isLoading && <LoadingSpinner colour={Colours.PINK} text='Joining room...' />}
        {!isLoading && (
          <NameInputPanel
            buttonText='Join room'
            inputName='nameInputJoin'
            inputPlaceholder='Enter your nickname'
            labelText='To join the room, enter your nickname'
            onChange={handleInputChange}
            onClick={handleOnClick}
          />
        )}
      </AppContainer>
    );
  }

  return (
    isConnected &&
    roomId &&
    player && (
      <AppContainer isConnected>
        <GameRoom players={players} roomId={roomId} player={player} />
      </AppContainer>
    )
  );
};

export default ConnectedApp;
