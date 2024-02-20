import {
  EndTurnResult,
  GameJoinResult,
  GameStartResult,
  GameStateResult,
  PlayerSearchResult,
  RoomGetResult,
  RoomJoinResult,
  RoomSearchResult,
  RoundContinueResult,
  RoundEndResult,
  RoundStartResult,
  ScoreUpdateResult,
  ScoringResult,
  UpdatePlayersResult,
} from '../types/Socket';

export enum Action {
  PLAYER_SEARCH = 'PLAYER_SEARCH',
  ROOM_SEARCH = 'ROOM_SEARCH',
  ROOM_GET = 'ROOM_ GET',
  ROOM_JOIN = 'ROOM_JOIN',
  PLAYERS_UPDATE = 'PLAYERS_UPDATE',
  GAME_JOIN = 'GAME_JOIN',
  GAME_START = 'GAME_START',
  GAME_UPDATE_STATE = 'GAME_UPDATE_STATE',
  END_TURN = 'END_TURN',
  ROUND_START = 'ROUND_START',
  ROUND_CONTINUE = 'ROUND_CONTINUE',
  ROUND_END = 'ROUND_END',
  SCORE_UPDATE = 'SCORE_UPDATE',
  SCORING = 'SCORING',
  LOADING = 'LOADING',
  LOADING_STOP = 'LOADING_STOP',
}

type RoomSearch = { type: Action.ROOM_SEARCH; payload: RoomSearchResult };
type RoomJoin = { type: Action.ROOM_JOIN; payload: RoomJoinResult };
type RoomGet = { type: Action.ROOM_GET; payload: RoomGetResult };
type Loading = { type: Action.LOADING | Action.LOADING_STOP };
type PlayerSearch = { type: Action.PLAYER_SEARCH; payload: PlayerSearchResult };
type PlayersUpdate = { type: Action.PLAYERS_UPDATE; payload: UpdatePlayersResult };
type GameJoin = { type: Action.GAME_JOIN; payload: GameJoinResult };
type GameStart = { type: Action.GAME_START; payload: GameStartResult };
type GameUpdateState = { type: Action.GAME_UPDATE_STATE; payload: GameStateResult };
type EndTurn = { type: Action.END_TURN; payload: EndTurnResult };
type Scoring = { type: Action.SCORING; payload: ScoringResult };
type RoundStart = { type: Action.ROUND_START; payload: RoundStartResult };
type RoundContinue = { type: Action.ROUND_CONTINUE; payload: RoundContinueResult };
type RoundEnd = { type: Action.ROUND_END; payload: RoundEndResult };
type ScoreUpdate = { type: Action.SCORE_UPDATE; payload: ScoreUpdateResult };

export type GameAction =
  | RoomJoin
  | Loading
  | PlayerSearch
  | RoomGet
  | PlayersUpdate
  | GameJoin
  | GameStart
  | GameUpdateState
  | EndTurn
  | Scoring
  | RoundStart
  | RoomSearch
  | RoundContinue
  | RoundEnd
  | ScoreUpdate;
