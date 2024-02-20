import { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from './../socket/Socket';
import { GameContext } from './GameContext';
import { PlayerContext } from './PlayerContext';
import { SocketEvents } from '../constants';
import {
  GameStartResult,
  GameStateResult,
  RoundEndResult,
  RoundContinueResult,
  RoundStartResult,
  ScoringResult,
  UpdatePlayerResult,
  UpdatePlayersResult,
  RoomSearchResult,
  PlayerSearchResult,
  GameJoinResult,
  RoomGetResult,
  EndTurnResult,
  ScoreUpdateResult,
} from '../types/Socket';
import { Action } from '../reducer/Action';

export const SocketContext = createContext<SocketContextType>({ isConnected: false });

const SocketContextProvider = ({ children }: PropsWithChildren) => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  const navigate = useNavigate();

  const { dispatch } = useContext(GameContext);
  const { setPlayer, setSelectedSquare, setIsInRoom } = useContext(PlayerContext);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const handleUpdatePlayer = ({ player }: UpdatePlayerResult) => {
      setPlayer(player);
    };

    const handlePlayerSearch = ({ isInRoom }: PlayerSearchResult) => {
      setIsInRoom(isInRoom);
    };

    const handleRoomGet = (payload: RoomGetResult) => {
      setPlayer(payload.player);

      dispatch({ type: Action.ROOM_GET, payload });
    };

    const handleUpdatePlayers = (payload: UpdatePlayersResult) => {
      dispatch({ type: Action.PLAYERS_UPDATE, payload });
    };

    const handleGameJoin = (payload: GameJoinResult) => {
      dispatch({ type: Action.GAME_JOIN, payload });
    };

    const handleGameStart = (payload: GameStartResult) => {
      dispatch({ type: Action.GAME_START, payload });
    };

    const handleGameState = (payload: GameStateResult) => {
      dispatch({ type: Action.GAME_UPDATE_STATE, payload });
    };

    const handleEndTurn = (payload: EndTurnResult) => {
      setSelectedSquare(null);
      dispatch({ type: Action.END_TURN, payload });
    };

    const handleScoring = (payload: ScoringResult) => {
      dispatch({ type: Action.SCORING, payload });
    };

    const handleRoundStart = (payload: RoundStartResult) => {
      dispatch({ type: Action.ROUND_START, payload });
    };

    const handleRoomSearch = (payload: RoomSearchResult) => {
      if (payload.doesRoomExist) {
        dispatch({ type: Action.ROOM_SEARCH, payload });
      } else {
        dispatch({ type: Action.ROOM_SEARCH, payload: { ...payload, roomId: '' } });
      }
    };

    const handleRoundContinue = (payload: RoundContinueResult) => {
      setSelectedSquare(null);
      dispatch({ type: Action.ROUND_CONTINUE, payload });
    };

    const handleEndRound = (payload: RoundEndResult) => {
      dispatch({ type: Action.ROUND_END, payload });
    };

    const updateRoom = (payload: ScoreUpdateResult) => {
      dispatch({ type: Action.SCORE_UPDATE, payload });
    };

    socket.on(SocketEvents.CONNECT, onConnect);
    socket.on(SocketEvents.DISCONNECT, onDisconnect);
    // socket.on(SocketEvents.ROOM_JOIN, handleRoomJoin);
    socket.on(SocketEvents.ROOM_UPDATE, updateRoom);
    socket.on(SocketEvents.ROOM_SEARCH, handleRoomSearch);
    socket.on(SocketEvents.ROOM_GET, handleRoomGet);
    socket.on(SocketEvents.PLAYER_UPDATE, handleUpdatePlayer);
    socket.on(SocketEvents.GAME_START, handleGameStart);
    socket.on(SocketEvents.GAME_ROUND_START, handleRoundStart);
    socket.on(SocketEvents.GAME_ROUND_CONTINUE, handleRoundContinue);
    socket.on(SocketEvents.GAME_TURN_END, handleEndTurn);
    socket.on(SocketEvents.GAME_ROUND_END, handleEndRound);
    socket.on(SocketEvents.GAME_UPDATE_SCORES, handleScoring);
    socket.on(SocketEvents.GAME_UPDATE_STATE, handleGameState);
    socket.on(SocketEvents.GAME_JOIN, handleGameJoin);
    socket.on(SocketEvents.GAME_END, handleGameState);
    socket.on(SocketEvents.PLAYERS_UPDATE, handleUpdatePlayers);
    socket.on(SocketEvents.PLAYER_SEARCH, handlePlayerSearch);

    socket.on('connect_error', err => {
      console.log('websocket error: ', err.message);

      navigate('/error', { state: { message: err.message } });
    });

    return () => {
      socket.off(SocketEvents.CONNECT, onConnect);
      socket.off(SocketEvents.DISCONNECT, onDisconnect);
    };
  }, [dispatch, navigate, setIsInRoom, setPlayer, setSelectedSquare]);

  return <SocketContext.Provider value={{ isConnected }}>{children}</SocketContext.Provider>;
};

type SocketContextType = {
  isConnected: boolean;
};

export default SocketContextProvider;
