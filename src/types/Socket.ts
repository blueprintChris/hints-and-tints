import { Square } from '../constants/board';
import { SurroundingSquares } from './Game';
import { Player } from './Players';

export type RoomJoinResult = {
  roomId: string;
  players: Player[];
  gameState: string;
};

export type RoomLeaveResult = {
  players: Player[];
};

export type GameStateResult = {
  gameState: string;
};

export type PlayerRoleResult = {
  players: Player[];
};

export type UpdatePlayerResult = {
  player: Player;
};

export type GameStartResult = {
  gameState: string;
  players: Player[];
};

export type RoundStartResult = {
  gameState: string;
  selectedColour: Square;
  players: Player[];
  currentTurn: Player;
  firstHint: string;
};

export type RoundStart2Result = {
  gameState: string;
  currentTurn: Player;
  secondHint: string;
};

export type MakeTurnResult = {
  currentTurn: Player;
};

export type RoundEndResult = {
  players: Player[];
  gameState: string;
  firstHint: string;
  secondHint: string;
};

export type UpdatePlayersResult = {
  players: Player[];
};

export type PreScoringResult = {
  players: Player[];
  gameState: string;
  surroundingSquares: SurroundingSquares;
  roomId: string;
};

export type ScoringResult = {
  players: Player[];
  gameState: string;
};
