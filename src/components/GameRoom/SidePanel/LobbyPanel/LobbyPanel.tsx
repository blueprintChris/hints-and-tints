import { HINTER, TINTER } from '../../../../constants/player';
import { Player } from '../../../../types/Players';
import { Button, Dropdown } from '../../../../components';
import PlayerList from '../PlayerList/PlayerList';
import LobbyList from './LobbyList/LobbyList';
import { Colours } from '../../../../constants/colours';

import { socket } from '../../../../socket/Socket';
import styles from './LobbyPanel.module.css';
import { SocketEvents } from '../../../../constants';
import { ChangeEvent, useContext } from 'react';
import { GameContext } from '../../../../context';

const LobbyPanel = ({ players, player, onHinterClick, onJoinClick, onStartClick }: Props) => {
  const { roomId } = useContext(GameContext);

  const hinter = players.find(pl => pl.role === HINTER);
  const tinter = players.find(pl => pl.role === TINTER);

  const canStartGame = () => hinter && tinter && player?.isHost;

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    socket.emit(SocketEvents.ROOM_UPDATE, { roomId, scoreLimit: e.target.value });
  };

  return (
    <div className={styles.lobbyContainer}>
      <div className={styles.playersContainer}>
        <h1>Hinter</h1>
        {hinter ? (
          <PlayerList players={players} role={HINTER} showScores={false} isHinter />
        ) : (
          <div className={styles.buttonWrapper}>
            <Button onClick={onHinterClick} text='Join as hinter' disabled={player?.role !== ''} />
          </div>
        )}
        <h1>Tinters</h1>
        <PlayerList players={players} role={TINTER} showScores={false} />
        {!player?.role && (
          <div className={styles.buttonWrapper}>
            <Button onClick={onJoinClick} text='Join game' disabled={player?.role !== ''} />
          </div>
        )}
      </div>
      <div className={styles.bottomWrapper}>
        <LobbyList players={players} />
        {player?.isHost && (
          <div className={styles.buttonWrapper}>
            <div className={styles.floatingHint}>Set your score limit</div>
            <div className={styles.dropdownWrapper}>
              <Dropdown onChange={handleDropdownChange} />
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
  player: Player | null;
  onHinterClick: () => void;
  onJoinClick: () => void;
  onStartClick: () => void;
};

export default LobbyPanel;
