import classnames from 'classnames';
import AnimatedNumber from 'animated-number-react';
import { UpArrow } from '../../components';
import { Player } from '../../types/Players';
import styles from './PlayerList.module.css';
import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../context';
import { GameStates } from '../../constants';

const PlayerList = ({ players, showScores, role, isHinter, currentTurn }: Props) => {
  const [showArrow, setShowArrow] = useState(false);

  const { gameState } = useContext(GameContext);

  useEffect(() => {
    if (gameState === GameStates.SCORING) {
      setTimeout(() => {
        setShowArrow(true);

        setTimeout(() => {
          setShowArrow(false);
        }, 5000);
      }, 10000);
    }
  }, [gameState]);

  const formatValue = (value: number) => value.toFixed(0);
  return (
    <div className={classnames(styles.playerContainer, { [styles.hinter]: isHinter })}>
      {players.map(
        pl =>
          pl.role === role && (
            <div
              className={classnames(styles.player, { [styles.current]: currentTurn?.id === pl.id })}
              key={pl.id}
            >
              <div className={styles.playerColourWrapper}>
                <div className={styles.playerColour} style={{ backgroundColor: pl.colour }} />
                <span>{pl.name}</span>
              </div>
              {showScores && (
                <div className={styles.scoreWrapper}>
                  {showArrow && <UpArrow />}
                  <div className={styles.score}>
                    <AnimatedNumber
                      value={pl.score}
                      formatValue={formatValue}
                      delay={10000}
                      duration={2000}
                    />
                  </div>
                </div>
              )}
            </div>
          )
      )}
    </div>
  );
};

type Props = {
  players: Player[];
  showScores?: boolean;
  role: string;
  isHinter?: boolean;
  currentTurn?: Player | null;
};

export default PlayerList;
