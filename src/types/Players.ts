import { Square } from '../constants/board';

export type Player = {
  id: string;
  name: string;
  score: number;
  role: string;
  colour: string;
  firstTint: Square;
  secondTint: Square;
  isHost: boolean;
};

export type Players = Player[];
