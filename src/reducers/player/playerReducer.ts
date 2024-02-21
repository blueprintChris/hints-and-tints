import { Square } from '../../constants/board';
import { Player } from '../../types/Players';
import { PlayerAction, PlayerActions } from './Action';

type State = {
  player: Player | null;
  isInRoom: boolean;
  selectedSquare: Square | null;
};

const playerReducer = (state: State, action: PlayerActions) => {
  switch (action.type) {
    case PlayerAction.PLAYER_UPDATE: {
      const { payload } = action;

      return {
        ...state,
        player: payload.player,
      };
    }

    case PlayerAction.PLAYER_SEARCH: {
      const { payload } = action;

      return {
        ...state,
        isInRoom: payload.isInRoom,
      };
    }

    case PlayerAction.PLAYER_SELECTED_SQUARE_CLEAR: {
      return {
        ...state,
        selectedSquare: null,
      };
    }

    case PlayerAction.PLAYER_SELECTED_SQUARE: {
      const { payload } = action;

      return {
        ...state,
        selectedSquare: payload.selectedSquare,
      };
    }
  }
};

export default playerReducer;
