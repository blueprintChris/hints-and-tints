import { Square } from '../../constants/board';
import { Player } from '../../types/Players';
import { GameAction, GameActions } from './Action';

type State = {
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
};

const gameReducer = (state: State, action: GameActions) => {
  switch (action.type) {
    case GameAction.ROOM_GET: {
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

    case GameAction.ROOM_JOIN: {
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

    case GameAction.PLAYERS_UPDATE: {
      const { payload } = action;

      return {
        ...state,
        players: payload.players,
        isLoading: false,
      };
    }

    case GameAction.GAME_JOIN: {
      const { payload } = action;

      return {
        ...state,
        players: payload.players,
        spectators: payload.spectators,
        isLoading: false,
      };
    }

    case GameAction.GAME_START: {
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

    case GameAction.GAME_UPDATE_STATE: {
      const { payload } = action;

      return {
        ...state,
        gameState: payload.gameState,
        isLoading: false,
      };
    }

    case GameAction.END_TURN: {
      const { payload } = action;

      return {
        ...state,
        currentTurn: payload.currentTurn,
        isLoading: false,
      };
    }

    case GameAction.SCORING: {
      const { payload } = action;

      return {
        ...state,
        players: payload.players,
        gameState: payload.gameState,
        winner: payload.winner,
        isLoading: false,
      };
    }

    case GameAction.ROUND_START: {
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

    case GameAction.ROUND_CONTINUE: {
      const { payload } = action;

      return {
        ...state,
        gameState: payload.gameState,
        currentTurn: payload.currentTurn,
        secondHint: payload.secondHint,
        isLoading: false,
      };
    }

    case GameAction.ROUND_END: {
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

    case GameAction.SCORE_UPDATE: {
      const { payload } = action;

      return {
        ...state,
        scoreLimit: payload.scoreLimit,
        isLoading: false,
      };
    }

    case GameAction.ROOM_SEARCH: {
      const { payload } = action;

      return {
        ...state,
        roomId: payload.roomId,
        isLoading: false,
      };
    }

    case GameAction.LOADING: {
      console.log('is loading');
      return {
        ...state,
        isLoading: true,
      };
    }

    case GameAction.LOADING_STOP: {
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
