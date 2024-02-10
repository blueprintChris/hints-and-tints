import { animated, useSpring } from '@react-spring/web';
import classnames from 'classnames';
import { Square } from '../../../../constants/board';
import { Player } from '../../../../types/Players';
import Tooltip from '../../../Tooltip/Tooltip';
import styles from './GameSquare.module.css';
import { useEffect, useState } from 'react';
import { getContrastRatio, hexToRgb } from '../../../../utils';
import { Colours } from '../../../../constants';

const GameSquare = ({ square, onClick, selectedSquare, gridOwner, player, delay }: Props) => {
  const [textColour, setTextColour] = useState(Colours.WHITE);

  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: delay,
  });

  useEffect(() => {
    const applyColourRatio = () => {
      const rgb = hexToRgb(gridOwner?.colour || player?.colour);
      const rgbText = hexToRgb(Colours.WHITE);

      if (rgb && rgbText) {
        const contrastRatio = getContrastRatio(rgb, rgbText);
        setTextColour(contrastRatio < 3 ? Colours.BLACK : Colours.WHITE);
      }
    };

    applyColourRatio();
  }, [gridOwner?.colour, player?.colour]);

  const hasFirstTint = gridOwner?.firstTint && gridOwner.firstTint.ref === square.ref;
  const hasSecondTint = gridOwner?.secondTint && gridOwner.secondTint.ref === square.ref;

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
          {hasFirstTint && (
            <Tooltip offset={{ x: 20, y: 20 }} text={`${gridOwner.name}`}>
              <div
                className={styles.selected}
                style={{
                  backgroundColor: gridOwner.colour,
                  color: textColour,
                  borderColor: textColour,
                }}
              >
                {gridOwner.name.substring(0, 1)}
              </div>
            </Tooltip>
          )}
          {hasSecondTint && (
            <Tooltip offset={{ x: 20, y: 20 }} text={`${gridOwner.name}`}>
              <div
                className={styles.selected}
                style={{
                  backgroundColor: gridOwner.colour,
                  color: textColour,
                  borderColor: textColour,
                }}
              >
                {gridOwner.name.substring(0, 1)}
              </div>
            </Tooltip>
          )}
          {!hasFirstTint && !hasSecondTint && selectedSquare?.ref === square.ref && (
            <div
              className={styles.selected}
              style={{
                backgroundColor: player?.colour,
                color: textColour,
                borderColor: textColour,
              }}
            ></div>
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
  player: Player | null;
};

export default GameSquare;
