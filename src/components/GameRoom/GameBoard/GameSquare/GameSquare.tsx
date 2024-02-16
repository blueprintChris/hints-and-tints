import { useContext, useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import classnames from 'classnames';
import { Square } from '../../../../constants/board';
import { Player } from '../../../../types/Players';
import { Tooltip, ScoringSquare } from '../../../../components';
import { getContrastRatio, hexToRgb } from '../../../../utils';
import { Colours, GameStates } from '../../../../constants';
import { GameContext } from '../../../../context';
import styles from './GameSquare.module.css';

const GameSquare = ({
  square,
  onClick,
  handleRevealComplete,
  selectedSquare,
  selectedColour,
  gridOwner,
  player,
  delay,
}: Props) => {
  const [textColour, setTextColour] = useState(Colours.WHITE);
  const [size, setSize] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  const { gameState } = useContext(GameContext);

  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: delay,
  });

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      setSize(entries[0].contentRect.width);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

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
    <div className={styles.buttonWrapper} ref={ref}>
      {(gameState === GameStates.REVEAL || gameState === GameStates.SCORING) &&
        selectedColour?.ref === square.ref && (
          <ScoringSquare
            delay={2000}
            duration={6000}
            size={size}
            onComplete={handleRevealComplete}
          />
        )}
      <Tooltip offset={{ x: 20, y: 20 }} square={square}>
        <animated.button
          className={classnames(styles.square)}
          key={square.ref}
          style={{ backgroundColor: square.hex, ...springs }}
          data-content={square.col}
          onClick={() => onClick(square)}
          disabled={hasSecondTint || hasFirstTint ? true : false}
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
  selectedColour: Square | null;
  isLoading: boolean;
  handleRevealComplete: () => void;
};

export default GameSquare;
