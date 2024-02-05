import { createContext, useState } from 'react';
import { Grid, grid } from '../constants/board';
import { Player } from '../types/Players';

const defaultContext = {
  grid,
  roomId: '',
  setRoomId: () => {},
  players: [],
  setPlayers: () => {},
};

export const GameContext = createContext<GameContextProps>(defaultContext);

const GameContextProvider = ({ children }: Props) => {
  const [roomId, setRoomId] = useState('');
  const [players, setPlayers] = useState<Player[]>([]);

  return (
    <GameContext.Provider value={{ grid, roomId, setRoomId, players, setPlayers }}>
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
};

type Props = {
  children: JSX.Element;
};

export default GameContextProvider;
