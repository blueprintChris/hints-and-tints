export type Player = {
  id: number;
  name: string;
  score: number;
  turn: number;
  isTurn: boolean;
  isClueGiver: boolean;
};

export type Players = Player[];
