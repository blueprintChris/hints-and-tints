import { createContext, useState } from 'react';
import { Player } from '../types/Players';
import { Square } from '../constants/board';

const defaultContext = {
  player: null,
  setPlayer: () => {},
  selectedSquare: null,
  setSelectedSquare: () => {},
};

export const PlayerContext = createContext<PlayerContextProps>(defaultContext);

const PlayerContextProvider = ({ children }: Props) => {
  const [player, setPlayer] = useState<Player | null>(null);
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);

  return (
    <PlayerContext.Provider value={{ player, setPlayer, selectedSquare, setSelectedSquare }}>
      {children}
    </PlayerContext.Provider>
  );
};

type PlayerContextProps = {
  player: Player | null;
  setPlayer: React.Dispatch<React.SetStateAction<Player | null>>;
  selectedSquare: Square | null;
  setSelectedSquare: React.Dispatch<React.SetStateAction<Square | null>>;
};

type Props = {
  children: JSX.Element;
};

export default PlayerContextProvider;
