/* eslint-disable react/jsx-no-duplicate-props */
import { animated, useSpring } from '@react-spring/web';
import classnames from 'classnames';
import { Square } from '../../../../constants/board';
import { Player } from '../../../../types/Players';
import Tooltip from '../../../Tooltip/Tooltip';
import styles from './GameSquare.module.css';

const GameSquare = ({ square, onClick, selectedSquare, gridOwner, delay }: Props) => {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: delay,
  });

  return (
    <div className={styles.buttonWrapper}>
      <Tooltip offset={{ x: 20, y: 20 }} square={square}>
        <animated.button
          className={classnames(styles.square)}
          key={square.ref}
          style={{ backgroundColor: square.hex, ...springs }}
          data-content={square.col}
          onClick={() => onClick(square)}
          disabled={gridOwner?.firstTint ? true : false}
        >
          {gridOwner?.firstTint ? (
            <Tooltip offset={{ x: 20, y: 20 }} text={`${gridOwner.name}`}>
              <div className={styles.selected} style={{ backgroundColor: gridOwner.colour }}>
                {gridOwner.name.substring(0, 1)}
              </div>
            </Tooltip>
          ) : (
            selectedSquare?.ref === square.ref && <div className={styles.selected}></div>
          )}
        </animated.button>
      </Tooltip>
    </div>
  );
};

type Props = {
  square: Square;
  onClick: (square: Square) => void;
  selectedSquare?: Square | null;
  gridOwner?: Player;
  delay: number;
};

export default GameSquare;
