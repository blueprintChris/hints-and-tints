import { Player } from './Players';

export type RoomJoinResult = {
  roomId: string;
  players: Player[];
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
