import { createContext, useState, useEffect, useContext } from 'react';
import { socket } from './../socket/Socket';
import { GameContext } from './GameContext';
import { PlayerContext } from './PlayerContext';
import { RoomJoinResult } from '../types/Socket';

export const SocketContext = createContext<SocketContextType>({ isConnected: false });

const SocketContextProvider = ({ children }: Props) => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  const { setPlayers, setRoomId, roomId } = useContext(GameContext);
  const { setPlayer, player } = useContext(PlayerContext);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const handleRoomJoin = ({ roomId, player, players }: RoomJoinResult) => {
      setPlayer(player);
      setPlayers(players);
      setRoomId(roomId);
    };

    const handleRoomLeave = ({ players }: RoomJoinResult) => {
      setPlayers(players);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('room-join', handleRoomJoin);
    socket.on('room-leave', handleRoomLeave);

    return () => {
      socket.off('connect', onConnect);
      socket.off('room-join', handleRoomJoin);
      socket.off('disconnect', onDisconnect);
      socket.on('room-leave', handleRoomLeave);
    };
  }, [setPlayer, setPlayers, setRoomId]);

  return <SocketContext.Provider value={{ isConnected }}>{children}</SocketContext.Provider>;
};

type SocketContextType = {
  isConnected: boolean;
};

type Props = {
  children: JSX.Element;
};

export default SocketContextProvider;
