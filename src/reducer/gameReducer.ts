import { Square } from '../constants/board';
import { Player } from '../types/Players';
import { Action, GameAction } from './Action';

interface State {
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
}

const gameReducer = (state: State, action: GameAction) => {
  switch (action.type) {
    case Action.ROOM_GET: {
      const { payload } = action;

      return {
        ...state,
        players: payload.players,
        spectators: payload.spectators,
        gameState: payload.gameState,
        scoreLimit: payload.scoreLimit,
        currentTurn: payload.currentTurn,
        selectedColour: payload.selectedColour,
        firstHint: payload.firstHint,
        secondHint: payload.secondHint,
        winner: payload.winner,
        isLoading: false,
      };
    }

    case Action.ROOM_JOIN: {
      const { payload } = action;

      return {
        ...state,
        roomId: payload.roomId,
        players: payload.players,
        spectators: payload.spectators,
        gameState: payload.gameState,
        scoreLimit: payload.scoreLimit,
        isLoading: false,
      };
    }

    case Action.PLAYERS_UPDATE: {
      const { payload } = action;

      return {
        ...state,
        players: payload.players,
        isLoading: false,
      };
    }

    case Action.GAME_JOIN: {
      const { payload } = action;

      return {
        ...state,
        players: payload.players,
        spectators: payload.spectators,
        isLoading: false,
      };
    }

    case Action.GAME_START: {
      const { payload } = action;

      return {
        ...state,
        gameState: payload.gameState,
        players: payload.players,
        firstHint: '',
        secondHint: '',
        winner: null,
        isLoading: false,
      };
    }

    case Action.GAME_UPDATE_STATE: {
      const { payload } = action;

      return {
        ...state,
        gameState: payload.gameState,
        isLoading: false,
      };
    }

    case Action.END_TURN: {
      const { payload } = action;

      return {
        ...state,
        currentTurn: payload.currentTurn,
        isLoading: false,
      };
    }

    case Action.SCORING: {
      const { payload } = action;

      return {
        ...state,
        players: payload.players,
        gameState: payload.gameState,
        winner: payload.winner,
        isLoading: false,
      };
    }

    case Action.ROUND_START: {
      const { payload } = action;

      return {
        ...state,
        selectedColour: payload.selectedColour,
        gameState: payload.gameState,
        players: payload.players,
        currentTurn: payload.currentTurn,
        firstHint: payload.firstHint,
        isLoading: false,
      };
    }

    case Action.ROUND_CONTINUE: {
      const { payload } = action;

      return {
        ...state,
        gameState: payload.gameState,
        currentTurn: payload.currentTurn,
        secondHint: payload.secondHint,
        isLoading: false,
      };
    }

    case Action.ROUND_END: {
      const { payload } = action;

      return {
        ...state,
        players: payload.players,
        gameState: payload.gameState,
        firstHint: payload.firstHint,
        secondHint: payload.secondHint,
        isLoading: false,
      };
    }

    case Action.SCORE_UPDATE: {
      const { payload } = action;

      return {
        ...state,
        scoreLimit: payload.scoreLimit,
        isLoading: false,
      };
    }

    case Action.ROOM_SEARCH: {
      const { payload } = action;

      return {
        ...state,
        roomId: payload.roomId,
        isLoading: false,
      };
    }

    case Action.LOADING: {
      console.log('is loading');
      return {
        ...state,
        isLoading: true,
      };
    }

    case Action.LOADING_STOP: {
      console.log('loading stopped');
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default gameReducer;
