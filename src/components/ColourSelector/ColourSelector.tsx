import { FormEvent, useCallback, useContext, useEffect, useState } from 'react';
import classnames from 'classnames';
import { Square } from '../../constants/board';
import { GameContext } from '../../context';
import randomNumberFromRange from '../../utils/randomNumber';
import styles from './ColourSelector.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Colours } from '../../constants/colours';
import Tooltip from '../Tooltip/Tooltip';
import { socket } from '../../socket/Socket';
import { GameStates, SocketEvents } from '../../constants';

const ColourSelector = ({ onColourClick, onChange, onSubmitClick }: Props) => {
  const [fourRandomColours, setFourRandomColours] = useState<Square[]>([]);
  const [hint, setHint] = useState('');
  const [selectedColour, setSelectedColour] = useState<Square | null>(null);
  const [diceRolls, setDiceRolls] = useState(2);

  const { grid, roomId } = useContext(GameContext);

  const handleColourClick = (colour: Square) => {
    setSelectedColour(colour);
  };

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    setHint(e.currentTarget.value);
  };

  const handleOnClick = () => {
    socket.emit(SocketEvents.GAME_ROUND_START, {
      roomId,
      selectedColour,
      gameState: GameStates.GUESSING_ONE,
      firstHint: hint,
    });
  };

  const handleDiceClick = () => {
    const remainingRolls = diceRolls - 1;
    setDiceRolls(remainingRolls);

    generateRandomColours();
  };

  const generateRandomColours = useCallback(() => {
    setSelectedColour(null);

    const colours: Square[] = [];

    do {
      const x = randomNumberFromRange(1, grid.length - 2);
      const row = grid[x];

      const y = randomNumberFromRange(1, row.squares.length - 2);
      const square = row.squares[y];

      square.x = x;
      square.y = y;

      if (colours.includes(square)) {
        continue;
      }

      colours.push(square);
    } while (colours.length < 4);

    setFourRandomColours(colours);
  }, [grid]);

  useEffect(() => {
    generateRandomColours();
  }, [generateRandomColours]);

  return (
    <div className={styles.colourSelector}>
      <div className={styles.coloursContainer}>
        {fourRandomColours.map(colour => (
          <div key={colour.ref}>
            <button
              className={classnames(styles.colourSquare, {
                [styles.selected]: selectedColour?.ref === colour.ref,
              })}
              style={{ backgroundColor: colour.hex }}
              onClick={() => handleColourClick(colour)}
            >
              {selectedColour?.ref === colour.ref && '✔'}
            </button>
            <div className={styles.colourText}>{colour.ref}</div>
          </div>
        ))}
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.inputContainer}>
          <Input
            name='clue'
            placeholder='Enter your clue'
            onChange={handleOnChange}
            disabled={selectedColour === null}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.buttonContainer}>
            <Button
              text='Submit'
              onClick={handleOnClick}
              disabled={selectedColour === null || hint === ''}
            />
          </div>
          <div className={styles.diceContainer}>
            <Tooltip
              offset={{ x: 20, y: 20 }}
              text={diceRolls > 0 ? `You can only roll ${diceRolls} more time(s)` : 'No more rolls'}
            >
              <Button
                text='🎲'
                onClick={handleDiceClick}
                colour={Colours.OLIVE}
                disabled={diceRolls === 0}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

type Props = {
  onColourClick?: (colour: Square) => void;
  onSubmitClick?: () => void;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
};
export default ColourSelector;
