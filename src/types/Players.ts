export type Player = {
  id: string;
  name: string;
  score: number;
  turn: number;
  isTurn: boolean;
  role: string;
};

export type Players = Player[];
