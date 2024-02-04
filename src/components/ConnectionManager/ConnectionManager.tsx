import { socket } from '../../socket/Socket';

const ConnectionManager = () => {
  const handleConnect = () => {
    socket.connect();
  };

  const handleDisconnect = () => {
    socket.disconnect();
  };

  return (
    <>
      <button onClick={handleConnect}>Connect</button>
      <button onClick={handleDisconnect}>Disconnect</button>
    </>
  );
};

export default ConnectionManager;
