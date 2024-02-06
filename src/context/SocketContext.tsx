import { createContext, useState, useEffect, useContext } from 'react';
import { socket } from './../socket/Socket';
import { GameContext } from './GameContext';
import { Player } from '../types/Players';

export const SocketContext = createContext<SocketContextType>({ isConnected: false });

const SocketContextProvider = ({ children }: Props) => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  const { setPlayers } = useContext(GameContext);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const updatePlayerList = ({ playerList }: RoomJoinResult) => {
      console.log(playerList);
      setPlayers(playerList);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('room-join', updatePlayerList);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, [setPlayers]);

  return <SocketContext.Provider value={{ isConnected }}>{children}</SocketContext.Provider>;
};

type RoomJoinResult = {
  playerList: Player[];
};

type SocketContextType = {
  isConnected: boolean;
};

type Props = {
  children: JSX.Element;
};

export default SocketContextProvider;
