import { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';
import { socket } from './../socket/Socket';
import { GameContext } from './GameContext';
import { PlayerContext } from './PlayerContext';
import {
  GameStartResult,
  GameStateResult,
  PlayerRoleResult,
  RoomJoinResult,
  RoomLeaveResult,
  RoundStartResult,
  UpdatePlayerResult,
} from '../types/Socket';
import { useNavigate } from 'react-router-dom';

export const SocketContext = createContext<SocketContextType>({ isConnected: false });

const SocketContextProvider = ({ children }: PropsWithChildren) => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  const { setPlayers, setRoomId, setGameState, setSelectedColour, setCurrentTurn, setFirstHint } =
    useContext(GameContext);
  const { setPlayer } = useContext(PlayerContext);

  const navigate = useNavigate();

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const handleRoomJoin = ({ roomId, players }: RoomJoinResult) => {
      setPlayers(players);
      setRoomId(roomId);
    };

    const handleUpdatePlayer = ({ player }: UpdatePlayerResult) => {
      setPlayer(player);
    };

    const handleRoomLeave = ({ players }: RoomLeaveResult) => {
      setPlayers(players);
    };

    const handleGameStart = ({ gameState, players }: GameStartResult) => {
      setGameState(gameState);
      setPlayers(players);
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

    const handleGameState = ({ gameState }: GameStateResult) => {
      setGameState(gameState);
    };

    const handlePlayerRole = ({ players }: PlayerRoleResult) => {
      setPlayers(players);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('room-join', handleRoomJoin);
    socket.on('update-player', handleUpdatePlayer);
    socket.on('game-start', handleGameStart);
    socket.on('round-start', handleRoundStart);
    socket.on('room-leave', handleRoomLeave);
    socket.on('update-game-state', handleGameState);
    socket.on('update-player-role', handlePlayerRole);

    return () => {
      socket.off('connect', onConnect);
      socket.off('room-join', handleRoomJoin);
      socket.off('disconnect', onDisconnect);
      socket.off('room-leave', handleRoomLeave);
      socket.off('update-game-state', handleGameState);
    };
  }, [navigate, setGameState, setPlayer, setPlayers, setRoomId]);

  return <SocketContext.Provider value={{ isConnected }}>{children}</SocketContext.Provider>;
};

type SocketContextType = {
  isConnected: boolean;
};

export default SocketContextProvider;
