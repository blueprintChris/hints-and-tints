import { Player } from './Players';

export type RoomJoinResult = {
  roomId: string;
  player: Player;
  players: Player[];
};
