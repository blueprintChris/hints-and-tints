import { createContext, useState } from 'react';
import { Player } from '../types/Players';
import { Square } from '../constants/board';

const defaultContext = {
  player: null,
  setPlayer: () => {},
  selectedSquare: null,
  setSelectedSquare: () => {},
  isInRoom: false,
  setIsInRoom: () => {},
};

export const PlayerContext = createContext<PlayerContextProps>(defaultContext);

const PlayerContextProvider = ({ children }: Props) => {
  const [player, setPlayer] = useState<Player | null>(null);
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [isInRoom, setIsInRoom] = useState(false);

  return (
    <PlayerContext.Provider
      value={{ player, setPlayer, selectedSquare, setSelectedSquare, isInRoom, setIsInRoom }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

type PlayerContextProps = {
  player: Player | null;
  setPlayer: React.Dispatch<React.SetStateAction<Player | null>>;
  selectedSquare: Square | null;
  setSelectedSquare: React.Dispatch<React.SetStateAction<Square | null>>;
  isInRoom: boolean;
  setIsInRoom: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  children: JSX.Element;
};

export default PlayerContextProvider;
