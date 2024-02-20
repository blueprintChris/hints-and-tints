import { createContext, useReducer } from 'react';
import { Grid, Square, grid } from '../constants/board';
import { Player } from '../types/Players';
import gameReducer from '../reducer/gameReducer';
import { initialState } from '../reducer/initialState';
import { GameAction } from '../reducer/Action';

const defaultContext = {
  grid,
  roomId: '',
  players: [],
  spectators: [],
  gameState: '',
  isLoading: false,
  selectedColour: null,
  currentTurn: null,
  firstHint: '',
  secondHint: '',
  winner: null,
  scoreLimit: 0,
  dispatch: () => {},
};

export const GameContext = createContext<GameContextProps>(defaultContext);

const GameContextProvider = ({ children }: Props) => {
  const [
    {
      roomId,
      players,
      spectators,
      gameState,
      isLoading,
      selectedColour,
      currentTurn,
      firstHint,
      secondHint,
      winner,
      scoreLimit,
    },
    dispatch,
  ] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider
      value={{
        grid,
        roomId,
        players,
        spectators,
        gameState,
        isLoading,
        selectedColour,
        currentTurn,
        firstHint,
        secondHint,
        winner,
        scoreLimit,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

type GameContextProps = {
  grid: Grid;
  roomId: string;
  players: Player[];
  spectators: Player[];
  gameState: string;
  isLoading: boolean;
  selectedColour: Square | null;
  currentTurn: Player | null;
  firstHint: string;
  secondHint: string;
  winner: Player | null;
  scoreLimit: number;
  dispatch: React.Dispatch<GameAction>;
};

type Props = {
  children: JSX.Element;
};

export default GameContextProvider;
