import { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';
import { socket } from './../socket/Socket';
import { GameContext } from './GameContext';
import { PlayerContext } from './PlayerContext';
import {
  GameStartResult,
  GameStateResult,
  MakeTurnResult,
  RoomJoinResult,
  RoundEndResult,
  RoundStart2Result,
  RoundStartResult,
  UpdatePlayerResult,
  UpdatePlayersResult,
} from '../types/Socket';
import { useNavigate } from 'react-router-dom';

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
  } = useContext(GameContext);
  const { setPlayer, setSelectedSquare } = useContext(PlayerContext);

  const navigate = useNavigate();

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
    };

    const handleGameState = ({ gameState }: GameStateResult) => {
      setGameState(gameState);
    };

    const handleMakeTurn = ({ currentTurn }: MakeTurnResult) => {
      setSelectedSquare(null);
      setCurrentTurn(currentTurn);
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

    const handleRoundStart2 = ({ gameState, currentTurn, secondHint }: RoundStart2Result) => {
      setGameState(gameState);
      setCurrentTurn(currentTurn);
      setSecondHint(secondHint);
    };

    const handleEndRound = ({ players, gameState, firstHint, secondHint }: RoundEndResult) => {
      setPlayers(players);
      setGameState(gameState);
      setFirstHint(firstHint);
      setSecondHint(secondHint);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    socket.on('room-join', handleRoomJoin);
    socket.on('room-leave', handleUpdatePlayers);

    socket.on('update-player', handleUpdatePlayer);

    socket.on('game-start', handleGameStart);
    socket.on('round-start', handleRoundStart);
    socket.on('round-start-2', handleRoundStart2);
    socket.on('make-turn', handleMakeTurn);
    socket.on('end-round', handleEndRound);

    socket.on('update-game-state', handleGameState);
    socket.on('update-players', handleUpdatePlayers);

    return () => {
      socket.off('connect', onConnect);
      socket.off('room-join', handleRoomJoin);
      socket.off('disconnect', onDisconnect);
    };
  }, [
    navigate,
    setCurrentTurn,
    setFirstHint,
    setGameState,
    setPlayer,
    setPlayers,
    setRoomId,
    setSecondHint,
    setSelectedColour,
    setSelectedSquare,
  ]);

  return <SocketContext.Provider value={{ isConnected }}>{children}</SocketContext.Provider>;
};

type SocketContextType = {
  isConnected: boolean;
};

export default SocketContextProvider;
