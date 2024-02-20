import { Square } from '../constants/board';
import { SurroundingSquares } from './Game';
import { Player } from './Players';

export type RoomJoinResult = {
  roomId: string;
  players: Player[];
  spectators: Player[];
  gameState: string;
  scoreLimit: number;
};

export type RoomSearchResult = {
  roomId: string;
  doesRoomExist: boolean;
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

export type RoundContinueResult = {
  gameState: string;
  currentTurn: Player;
  secondHint: string;
};

export type EndTurnResult = {
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

export type GameJoinResult = {
  players: Player[];
  spectators: Player[];
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
  winner: Player;
};

export type PlayerSearchResult = {
  isInRoom: boolean;
};

export type RoomGetResult = {
  player: Player;
  players: Player[];
  spectators: Player[];
  gameState: string;
  scoreLimit: number;
  currentTurn: Player;
  selectedColour: Square;
  firstHint: string;
  secondHint: string;
  winner: Player;
};

export type ScoreUpdateResult = {
  scoreLimit: number;
};
