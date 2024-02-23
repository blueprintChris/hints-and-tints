import { io } from 'socket.io-client';

const NODE_ENV = process.env.NODE_ENV;
const SOCKET_URI = process.env.REACT_APP_SOCKET_URI;
const SOCKET_KEY = process.env.REACT_APP_SOCKET_KEY;

const LOCAL_HOST = 'http://localhost:4000';

let PATH = '';
let KEY = '';

if (SOCKET_KEY && SOCKET_URI) {
  if (NODE_ENV === 'production') {
    PATH = SOCKET_URI;
    KEY = SOCKET_KEY;
  } else {
    PATH = LOCAL_HOST;
    KEY = SOCKET_KEY;
  }
}

export const socket = io(PATH, {
  autoConnect: false,
  auth: { token: KEY },
  transports: ['websocket'],
});
