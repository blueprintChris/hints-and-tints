import { createContext, useState } from 'react';
import { Grid, Square, grid } from '../constants/board';
import { Player } from '../types/Players';

export const GAME_STATES = {
  LOBBY: 'LOBBY',
  SELECTION: 'SELECTION',
  SELECTION_TWO: 'SELECTION_TWO',
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
  selectedColour: null,
  setSelectedColour: () => {},
  currentTurn: null,
  setCurrentTurn: () => {},
  firstHint: '',
  setFirstHint: () => {},
  secondHint: '',
  setSecondHint: () => {},
};

export const GameContext = createContext<GameContextProps>(defaultContext);

const GameContextProvider = ({ children }: Props) => {
  const [roomId, setRoomId] = useState('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [gameState, setGameState] = useState('LOBBY');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedColour, setSelectedColour] = useState<Square | null>(null);
  const [currentTurn, setCurrentTurn] = useState<Player | null>(null);
  const [firstHint, setFirstHint] = useState('');
  const [secondHint, setSecondHint] = useState('');

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
        selectedColour,
        setSelectedColour,
        currentTurn,
        setCurrentTurn,
        firstHint,
        setFirstHint,
        secondHint,
        setSecondHint,
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
  selectedColour: Square | null;
  setSelectedColour: React.Dispatch<React.SetStateAction<Square | null>>;
  currentTurn: Player | null;
  setCurrentTurn: React.Dispatch<React.SetStateAction<Player | null>>;
  firstHint: string;
  setFirstHint: React.Dispatch<React.SetStateAction<string>>;
  secondHint: string;
  setSecondHint: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  children: JSX.Element;
};

export default GameContextProvider;
