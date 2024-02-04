import { createContext, useState, useEffect } from 'react';
import { socket } from './../socket/Socket';

export const SocketContext = createContext<SocketContextType>({ isConnected: false });

const SocketContextProvider = ({ children }: Props) => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return <SocketContext.Provider value={{ isConnected }}>{children}</SocketContext.Provider>;
};

type SocketContextType = {
  isConnected: boolean;
};

type Props = {
  children: JSX.Element;
};
export default SocketContextProvider;
