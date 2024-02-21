import { createContext, useReducer } from 'react';
import { Player } from '../types/Players';
import { Square } from '../constants/board';
import playerReducer from '../reducers/player/playerReducer';
import { initialState } from '../reducers/player/initialState';
import { PlayerActions } from '../reducers/player/Action';

const defaultContext = {
  player: null,
  selectedSquare: null,
  isInRoom: false,
  dispatch: () => {},
};

export const PlayerContext = createContext<PlayerContextProps>(defaultContext);

const PlayerContextProvider = ({ children }: Props) => {
  const [{ player, isInRoom, selectedSquare }, dispatch] = useReducer(playerReducer, initialState);

  return (
    <PlayerContext.Provider value={{ player, selectedSquare, isInRoom, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
};

type PlayerContextProps = {
  player: Player | null;
  selectedSquare: Square | null;
  isInRoom: boolean;
  dispatch: React.Dispatch<PlayerActions>;
};

type Props = {
  children: JSX.Element;
};

export default PlayerContextProvider;
