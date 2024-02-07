import { createContext, useState } from 'react';
import { Grid, grid } from '../constants/board';
import { Player } from '../types/Players';

export const GAME_STATES = {
  LOBBY: 'LOBBY',
  SELECTION: 'SELECTION',
  GUESSING_ONE: 'GUESSING_ONE',
  GUESSING_TWO: 'GUESSING_TWO',
  SCORING: 'SCORING',
  FINISHED: 'FINISHED',
};

const defaultContext = {
  grid,
  roomId: '',
  setRoomId: () => {},
  players: [],
  setPlayers: () => {},
  hinter: '',
  setHinter: () => {},
  gameState: GAME_STATES.LOBBY,
  setGameState: () => {},
};

export const GameContext = createContext<GameContextProps>(defaultContext);

const GameContextProvider = ({ children }: Props) => {
  const [roomId, setRoomId] = useState('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [hinter, setHinter] = useState('');
  const [gameState, setGameState] = useState('LOBBY');

  return (
    <GameContext.Provider
      value={{ grid, roomId, setRoomId, players, setPlayers, gameState, setGameState }}
    >
      {children}
    </GameContext.Provider>
  );
};

type GameContextProps = {
  grid: Grid;
  roomId: string;
  setRoomId: React.Dispatch<React.SetStateAction<string>>;
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  gameState: string;
  setGameState: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  children: JSX.Element;
};

export default GameContextProvider;
