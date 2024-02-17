import { io } from 'socket.io-client';

const env = process.env.NODE_ENV;
const URL = env === 'production' ? process.env.REACT_APP_SOCKET_URI : 'http://localhost';
const KEY =
  env === 'production' ? process.env.REACT_APP_SOCKET_KEY : process.env.REACT_APP_SOCKET_KEY;

export const socket = io(`${URL}:4000`, {
  autoConnect: false,
  auth: { token: KEY },
  transports: ['websocket'],
});
