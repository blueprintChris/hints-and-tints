import { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';
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
  WinnerResult,
} from '../types/Socket';

export const SocketContext = createContext<SocketContextType>({ isConnected: false });

const SocketContextProvider = ({ children }: PropsWithChildren) => {
  const [isConnected, setIsConnected] = useState(socket.connected);

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
  } = useContext(GameContext);
  const { setPlayer, setSelectedSquare } = useContext(PlayerContext);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const handleRoomJoin = ({ roomId, players, gameState }: RoomJoinResult) => {
      setPlayers(players);
      setGameState(gameState);
      setRoomId(roomId);
      setIsLoading(false);
    };

    const handleUpdatePlayer = ({ player }: UpdatePlayerResult) => {
      setPlayer(player);
    };

    const handleUpdatePlayers = ({ players }: UpdatePlayersResult) => {
      setPlayers(players);
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
    };

    const handleEndTurn = ({ currentTurn }: MakeTurnResult) => {
      setSelectedSquare(null);
      setCurrentTurn(currentTurn);
    };

    const handleScoring = ({ players, gameState }: ScoringResult) => {
      setPlayers(players);
      setGameState(gameState);
      setIsLoading(true);
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
    };

    const handleEndRound = ({ players, gameState, firstHint, secondHint }: RoundEndResult) => {
      setPlayers(players);
      setGameState(gameState);
      setFirstHint(firstHint);
      setSecondHint(secondHint);
    };

    const handleGameEnd = ({ gameState, winner }: WinnerResult) => {
      console.log('winner: ', winner);
      setWinner(winner);
      setGameState(gameState);
    };

    socket.on(SocketEvents.CONNECT, onConnect);
    socket.on(SocketEvents.DISCONNECT, onDisconnect);
    socket.on(SocketEvents.ROOM_JOIN, handleRoomJoin);
    socket.on(SocketEvents.ROOM_SEARCH, handleRoomSearch);
    socket.on(SocketEvents.PLAYER_UPDATE, handleUpdatePlayer);
    socket.on(SocketEvents.GAME_START, handleGameStart);
    socket.on(SocketEvents.GAME_ROUND_START, handleRoundStart);
    socket.on(SocketEvents.GAME_ROUND_CONTINUE, handleRoundContinue);
    socket.on(SocketEvents.GAME_TURN_END, handleEndTurn);
    socket.on(SocketEvents.GAME_ROUND_END, handleEndRound);
    socket.on(SocketEvents.GAME_UPDATE_SCORES, handleScoring);
    socket.on(SocketEvents.GAME_UPDATE_STATE, handleGameState);
    socket.on(SocketEvents.GAME_END, handleGameEnd);
    socket.on(SocketEvents.PLAYERS_UPDATE, handleUpdatePlayers);

    return () => {
      socket.off(SocketEvents.CONNECT, onConnect);
      socket.off(SocketEvents.DISCONNECT, onDisconnect);
    };
  }, [
    setCurrentTurn,
    setFirstHint,
    setGameState,
    setIsLoading,
    setPlayer,
    setPlayers,
    setRoomId,
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
