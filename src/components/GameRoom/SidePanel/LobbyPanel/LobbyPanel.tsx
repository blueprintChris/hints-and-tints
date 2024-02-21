import { ChangeEvent, useContext } from 'react';
import { socket } from '../../../../socket/Socket';
import { GameContext } from '../../../../context';
import { Button, Dropdown, Tooltip } from '../../../../components';
import PlayerList from '../PlayerList/PlayerList';
import LobbyList from './LobbyList/LobbyList';
import { SocketEvents, PlayerRoles, Colours } from '../../../../constants';
import { Player } from '../../../../types/Players';
import styles from './LobbyPanel.module.css';

const LobbyPanel = ({
  players,
  spectators,
  player,
  onHinterClick,
  onJoinClick,
  onStartClick,
  scoreLimit,
}: Props) => {
  const { roomId } = useContext(GameContext);

  const hinter = players.find(pl => pl.role === PlayerRoles.HINTER);
  const tinter = players.find(pl => pl.role === PlayerRoles.TINTER);

  const canStartGame = () => hinter && tinter && player?.isHost;

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    socket.emit(SocketEvents.ROOM_UPDATE, { roomId, scoreLimit: e.target.value });
  };

  return (
    <div className={styles.lobbyContainer}>
      <div className={styles.playersContainer}>
        <h1>Hinter</h1>
        {hinter ? (
          <PlayerList players={players} role={PlayerRoles.HINTER} showScores={false} isHinter />
        ) : (
          <div className={styles.buttonWrapper}>
            <Button
              onClick={onHinterClick}
              text='Join as hinter'
              disabled={player?.role !== PlayerRoles.SPECTATOR}
            />
          </div>
        )}
        <h1>Tinters</h1>
        <PlayerList players={players} role={PlayerRoles.TINTER} showScores={false} />
        {player?.role === PlayerRoles.SPECTATOR && (
          <div className={styles.buttonWrapper}>
            <Button
              onClick={onJoinClick}
              text='Join game'
              disabled={player?.role !== 'SPECTATOR'}
            />
          </div>
        )}
      </div>
      <div className={styles.bottomWrapper}>
        <LobbyList spectators={spectators} />
        {player?.isHost && (
          <div className={styles.buttonWrapper}>
            <div className={styles.floatingHint}>Set your score limit</div>
            <div className={styles.dropdownWrapper}>
              <Tooltip offset={{ x: 20, y: 20 }} text='yes'>
                <Dropdown onChange={handleDropdownChange} defaultValue={scoreLimit} />
              </Tooltip>
            </div>
            <Button
              onClick={onStartClick}
              text='Start Game'
              colour={Colours.GREEN}
              disabled={!canStartGame()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

type Props = {
  players: Player[];
  spectators: Player[];
  player: Player | null;
  onHinterClick: () => void;
  onJoinClick: () => void;
  onStartClick: () => void;
  scoreLimit: number;
};

export default LobbyPanel;
