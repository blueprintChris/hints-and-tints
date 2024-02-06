export type Player = {
  id: string;
  name: string;
  score: number;
  turn: number;
  isTurn: boolean;
  isClueGiver: boolean;
};

export type Players = Player[];
