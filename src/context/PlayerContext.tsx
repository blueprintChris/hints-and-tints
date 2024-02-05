import { createContext, useState } from 'react';
import { Player } from '../types/Players';

const defaultContext = {
  player: null,
  setPlayer: () => {},
};

export const PlayerContext = createContext<PlayerContextProps>(defaultContext);

const PlayerContextProvider = ({ children }: Props) => {
  const [player, setPlayer] = useState<Player | null>(null);

  return <PlayerContext.Provider value={{ player, setPlayer }}>{children}</PlayerContext.Provider>;
};

type PlayerContextProps = {
  player: Player | null;
  setPlayer: React.Dispatch<React.SetStateAction<Player | null>>;
};

type Props = {
  children: JSX.Element;
};

export default PlayerContextProvider;
