import { createContext } from 'react';
import { Players } from '../types/Players';

const PlayerContext = createContext({});

const PlayerContextProvider = ({ players, children }: PlayerContextProps) => {
  return <PlayerContext.Provider value={{ players }}>{children}</PlayerContext.Provider>;
};

type PlayerContextProps = {
  players: Players;
  children: JSX.Element;
};

export default PlayerContextProvider;
