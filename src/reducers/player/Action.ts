import { Square } from '../../constants/board';
import { PlayerSearchResult, UpdatePlayerResult } from '../../types/Socket';

export enum PlayerAction {
  PLAYER_UPDATE = 'PLAYER_UPDATE',
  PLAYER_SEARCH = 'PLAYER_SEARCH',
  PLAYER_SELECTED_SQUARE_CLEAR = 'PLAYER_CLEAR_SELECTED_SQUARE',
  PLAYER_SELECTED_SQUARE = 'PLAYER_SELECTED_SQUARE',
}

type PlayerUpdate = { type: PlayerAction.PLAYER_UPDATE; payload: UpdatePlayerResult };
type PlayerSearch = { type: PlayerAction.PLAYER_SEARCH; payload: PlayerSearchResult };
type PlayerSelectedSquareClear = { type: PlayerAction.PLAYER_SELECTED_SQUARE_CLEAR };
type PlayerSelectedSquare = {
  type: PlayerAction.PLAYER_SELECTED_SQUARE;
  payload: { selectedSquare: Square };
};

export type PlayerActions =
  | PlayerUpdate
  | PlayerSearch
  | PlayerSelectedSquareClear
  | PlayerSelectedSquare;
