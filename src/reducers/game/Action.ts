import {
  EndTurnResult,
  GameJoinResult,
  GameResetResult,
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
} from '../../types/Socket';

export enum GameAction {
  PLAYER_SEARCH = 'PLAYER_SEARCH',
  ROOM_SEARCH = 'ROOM_SEARCH',
  ROOM_GET = 'ROOM_ GET',
  ROOM_JOIN = 'ROOM_JOIN',
  PLAYERS_UPDATE = 'PLAYERS_UPDATE',
  GAME_JOIN = 'GAME_JOIN',
  GAME_START = 'GAME_START',
  GAME_UPDATE_STATE = 'GAME_UPDATE_STATE',
  GAME_RESET = 'GAME_RESET',
  END_TURN = 'END_TURN',
  ROUND_START = 'ROUND_START',
  ROUND_CONTINUE = 'ROUND_CONTINUE',
  ROUND_END = 'ROUND_END',
  SCORE_UPDATE = 'SCORE_UPDATE',
  SCORING = 'SCORING',
  LOADING = 'LOADING',
  LOADING_STOP = 'LOADING_STOP',
}

type RoomSearch = { type: GameAction.ROOM_SEARCH; payload: RoomSearchResult };
type RoomJoin = { type: GameAction.ROOM_JOIN; payload: RoomJoinResult };
type RoomGet = { type: GameAction.ROOM_GET; payload: RoomGetResult };
type Loading = { type: GameAction.LOADING | GameAction.LOADING_STOP };
type PlayerSearch = { type: GameAction.PLAYER_SEARCH; payload: PlayerSearchResult };
type PlayersUpdate = { type: GameAction.PLAYERS_UPDATE; payload: UpdatePlayersResult };
type GameJoin = { type: GameAction.GAME_JOIN; payload: GameJoinResult };
type GameStart = { type: GameAction.GAME_START; payload: GameStartResult };
type GameUpdateState = { type: GameAction.GAME_UPDATE_STATE; payload: GameStateResult };
type EndTurn = { type: GameAction.END_TURN; payload: EndTurnResult };
type Scoring = { type: GameAction.SCORING; payload: ScoringResult };
type RoundStart = { type: GameAction.ROUND_START; payload: RoundStartResult };
type RoundContinue = { type: GameAction.ROUND_CONTINUE; payload: RoundContinueResult };
type RoundEnd = { type: GameAction.ROUND_END; payload: RoundEndResult };
type ScoreUpdate = { type: GameAction.SCORE_UPDATE; payload: ScoreUpdateResult };
type GameReset = { type: GameAction.GAME_RESET; payload: GameResetResult };

export type GameActions =
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
  | ScoreUpdate
  | GameReset;
