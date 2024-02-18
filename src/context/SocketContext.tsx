import { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from './../socket/Socket';
import { GameContext } from './GameContext';
import { PlayerContext } from './PlayerContext';
import { SocketEvents } from '../constants';
import {
  GameStartResult,
  GameStateResult,
  MakeTurnResult,
  RoomJoinResult,
  RoundEndResult,
  RoundContinueResult,
  RoundStartResult,
  ScoringResult,
  UpdatePlayerResult,
  UpdatePlayersResult,
  RoomSearchResult,
  PlayerSearchResult,
  RoomUpdateResult,
} from '../types/Socket';

export const SocketContext = createContext<SocketContextType>({ isConnected: false });

const SocketContextProvider = ({ children }: PropsWithChildren) => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  const navigate = useNavigate();

  const {
    setPlayers,
    setRoomId,
    setGameState,
    setSelectedColour,
    setCurrentTurn,
    setFirstHint,
    setSecondHint,
    setSurroundingSquares,
    setIsLoading,
    setWinner,
    setScoreLimit,
  } = useContext(GameContext);
  const { setPlayer, setSelectedSquare } = useContext(PlayerContext);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const handleRoomJoin = ({ roomId, players, gameState, scoreLimit }: RoomJoinResult) => {
      setPlayers(players);
      setGameState(gameState);
      setScoreLimit(scoreLimit);
      setRoomId(roomId);

      setIsLoading(false);
    };

    const handleUpdatePlayer = ({ player }: UpdatePlayerResult) => {
      setPlayer(player);
    };

    const handlePlayerSearch = ({
      player,
      players,
      gameState,
      scoreLimit,
      currentTurn,
      selectedColour,
      firstHint,
      secondHint,
      winner,
    }: PlayerSearchResult) => {
      setPlayer(player);
      setPlayers(players);
      setGameState(gameState);
      setScoreLimit(scoreLimit);
      setCurrentTurn(currentTurn);
      setSelectedColour(selectedColour);
      setFirstHint(firstHint);
      setSecondHint(secondHint);
      setWinner(winner);

      setIsLoading(false);
    };

    const handleUpdatePlayers = ({ players }: UpdatePlayersResult) => {
      setPlayers(players);

      setIsLoading(false);
    };

    const handleGameStart = ({ gameState, players }: GameStartResult) => {
      setGameState(gameState);
      setPlayers(players);
      setFirstHint('');
      setSecondHint('');
      setWinner(null);

      setIsLoading(false);
    };

    const handleGameState = ({ gameState }: GameStateResult) => {
      setGameState(gameState);
      setIsLoading(false);
    };

    const handleEndTurn = ({ currentTurn }: MakeTurnResult) => {
      setSelectedSquare(null);
      setCurrentTurn(currentTurn);
      setIsLoading(false);
    };

    const handleScoring = ({ players, gameState, winner }: ScoringResult) => {
      setPlayers(players);
      setGameState(gameState);
      setWinner(winner);

      setIsLoading(false);
    };

    const handleRoundStart = ({
      selectedColour,
      gameState,
      players,
      currentTurn,
      firstHint,
    }: RoundStartResult) => {
      setSelectedColour(selectedColour);
      setGameState(gameState);
      setPlayers(players);
      setCurrentTurn(currentTurn);
      setFirstHint(firstHint);

      setIsLoading(false);
    };

    const handleRoomSearch = ({ doesRoomExist, roomId }: RoomSearchResult) => {
      if (doesRoomExist) {
        setRoomId(roomId);
      } else {
        setRoomId('');
      }
    };

    const handleRoundContinue = ({ gameState, currentTurn, secondHint }: RoundContinueResult) => {
      setGameState(gameState);
      setCurrentTurn(currentTurn);
      setSecondHint(secondHint);
      setSelectedSquare(null);

      setIsLoading(false);
    };

    const handleEndRound = ({ players, gameState, firstHint, secondHint }: RoundEndResult) => {
      setPlayers(players);
      setGameState(gameState);
      setFirstHint(firstHint);
      setSecondHint(secondHint);

      setIsLoading(false);
    };

    const updateRoom = ({ scoreLimit }: RoomUpdateResult) => {
      setScoreLimit(scoreLimit);

      setIsLoading(false);
    };

    socket.on(SocketEvents.CONNECT, onConnect);
    socket.on(SocketEvents.DISCONNECT, onDisconnect);
    socket.on(SocketEvents.ROOM_JOIN, handleRoomJoin);
    socket.on(SocketEvents.ROOM_UPDATE, updateRoom);
    socket.on(SocketEvents.ROOM_SEARCH, handleRoomSearch);
    socket.on(SocketEvents.PLAYER_UPDATE, handleUpdatePlayer);
    socket.on(SocketEvents.GAME_START, handleGameStart);
    socket.on(SocketEvents.GAME_ROUND_START, handleRoundStart);
    socket.on(SocketEvents.GAME_ROUND_CONTINUE, handleRoundContinue);
    socket.on(SocketEvents.GAME_TURN_END, handleEndTurn);
    socket.on(SocketEvents.GAME_ROUND_END, handleEndRound);
    socket.on(SocketEvents.GAME_UPDATE_SCORES, handleScoring);
    socket.on(SocketEvents.GAME_UPDATE_STATE, handleGameState);
    socket.on(SocketEvents.GAME_END, handleGameState);
    socket.on(SocketEvents.PLAYERS_UPDATE, handleUpdatePlayers);
    socket.on(SocketEvents.PLAYER_SEARCH, handlePlayerSearch);

    socket.on('connect_error', err => {
      console.log('websocket error: ', err.message);
    });

    return () => {
      socket.off(SocketEvents.CONNECT, onConnect);
      socket.off(SocketEvents.DISCONNECT, onDisconnect);
    };
  }, [
    navigate,
    setCurrentTurn,
    setFirstHint,
    setGameState,
    setIsLoading,
    setPlayer,
    setPlayers,
    setRoomId,
    setScoreLimit,
    setSecondHint,
    setSelectedColour,
    setSelectedSquare,
    setSurroundingSquares,
    setWinner,
  ]);

  return <SocketContext.Provider value={{ isConnected }}>{children}</SocketContext.Provider>;
};

type SocketContextType = {
  isConnected: boolean;
};

export default SocketContextProvider;
