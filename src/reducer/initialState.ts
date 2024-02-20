import { grid } from '../constants/board';

export const initialState = {
  grid,
  roomId: '',
  players: [],
  spectators: [],
  gameState: '',
  scoreLimit: 0,
  currentTurn: null,
  selectedColour: null,
  firstHint: '',
  secondHint: '',
  isLoading: false,
  winner: null,
};
