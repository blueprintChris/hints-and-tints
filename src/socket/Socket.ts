import { io } from 'socket.io-client';

const URI = process.env.REACT_APP_SOCKET_URI;
const URL = process.env.NODE_ENV === 'production' && URI ? URI : 'http://localhost:4000';
const KEY = process.env.REACT_APP_SOCKET_KEY || '';

export const socket = io(URL, {
  autoConnect: false,
  auth: { token: KEY },
});
