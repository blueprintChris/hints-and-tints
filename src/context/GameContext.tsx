import { createContext } from 'react';
import { grid } from '../constants/board';

export const GameContext = createContext({ grid });

const GameContextProvider = ({ children }: Props) => {
  return <GameContext.Provider value={{ grid }}>{children}</GameContext.Provider>;
};

type Props = {
  children: JSX.Element;
};

export default GameContextProvider;
