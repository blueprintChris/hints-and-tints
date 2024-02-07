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
  isLoading: false,
  setIsLoading: () => {},
};

export const GameContext = createContext<GameContextProps>(defaultContext);

const GameContextProvider = ({ children }: Props) => {
  const [roomId, setRoomId] = useState('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [gameState, setGameState] = useState('LOBBY');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <GameContext.Provider
      value={{
        grid,
        roomId,
        setRoomId,
        players,
        setPlayers,
        gameState,
        setGameState,
        isLoading,
        setIsLoading,
      }}
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
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  children: JSX.Element;
};

export default GameContextProvider;
