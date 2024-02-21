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
import { GameAction } from '../reducers/game/Action';
import { PlayerAction } from '../reducers/player/Action';

export const SocketContext = createContext<SocketContextType>({ isConnected: false });

const SocketContextProvider = ({ children }: PropsWithChildren) => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  const navigate = useNavigate();

  const { dispatch: gameDispatch } = useContext(GameContext);
  const { dispatch: playerDispatch } = useContext(PlayerContext);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const handleUpdatePlayer = (payload: UpdatePlayerResult) => {
      playerDispatch({ type: PlayerAction.PLAYER_UPDATE, payload });
    };

    const handlePlayerSearch = (payload: PlayerSearchResult) => {
      playerDispatch({ type: PlayerAction.PLAYER_SEARCH, payload });
    };

    const handleRoomGet = (payload: RoomGetResult) => {
      playerDispatch({ type: PlayerAction.PLAYER_UPDATE, payload });

      gameDispatch({ type: GameAction.ROOM_GET, payload });
    };

    const handleUpdatePlayers = (payload: UpdatePlayersResult) => {
      gameDispatch({ type: GameAction.PLAYERS_UPDATE, payload });
    };

    const handleGameJoin = (payload: GameJoinResult) => {
      gameDispatch({ type: GameAction.GAME_JOIN, payload });
    };

    const handleGameStart = (payload: GameStartResult) => {
      gameDispatch({ type: GameAction.GAME_START, payload });
    };

    const handleGameState = (payload: GameStateResult) => {
      gameDispatch({ type: GameAction.GAME_UPDATE_STATE, payload });
    };

    const handleEndTurn = (payload: EndTurnResult) => {
      playerDispatch({ type: PlayerAction.PLAYER_SELECTED_SQUARE_CLEAR });

      gameDispatch({ type: GameAction.END_TURN, payload });
    };

    const handleScoring = (payload: ScoringResult) => {
      gameDispatch({ type: GameAction.SCORING, payload });
    };

    const handleRoundStart = (payload: RoundStartResult) => {
      gameDispatch({ type: GameAction.ROUND_START, payload });
    };

    const handleRoomSearch = (payload: RoomSearchResult) => {
      if (payload.doesRoomExist) {
        gameDispatch({ type: GameAction.ROOM_SEARCH, payload });
      } else {
        gameDispatch({ type: GameAction.ROOM_SEARCH, payload: { ...payload, roomId: '' } });
      }
    };

    const handleRoundContinue = (payload: RoundContinueResult) => {
      playerDispatch({ type: PlayerAction.PLAYER_SELECTED_SQUARE_CLEAR });

      gameDispatch({ type: GameAction.ROUND_CONTINUE, payload });
    };

    const handleEndRound = (payload: RoundEndResult) => {
      gameDispatch({ type: GameAction.ROUND_END, payload });
    };

    const updateRoom = (payload: ScoreUpdateResult) => {
      gameDispatch({ type: GameAction.SCORE_UPDATE, payload });
    };

    socket.on(SocketEvents.CONNECT, onConnect);
    socket.on(SocketEvents.DISCONNECT, onDisconnect);
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
  }, [gameDispatch, navigate, playerDispatch]);

  return <SocketContext.Provider value={{ isConnected }}>{children}</SocketContext.Provider>;
};

type SocketContextType = {
  isConnected: boolean;
};

export default SocketContextProvider;
