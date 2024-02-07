import { useContext, useEffect, useState } from 'react';
import { Square } from '../../constants/board';
import { GameContext } from '../../context';
import randomNumberFromRange from '../../utils/randomNumber';
import styles from './ColourSelector.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

const ColourSelector = ({ onColourSelect }: Props) => {
  const [fourRandomColours, setFourRandomColours] = useState<Square[]>([]);

  const { grid } = useContext(GameContext);

  const handleOnChange = () => {};

  const handleOnClick = () => {};

  useEffect(() => {
    const colours = [];

    for (let i = 0; i < 4; i++) {
      const row = grid[randomNumberFromRange(1, grid.length - 1)];
      const square = row.squares[randomNumberFromRange(1, row.squares.length - 1)];
      colours.push(square);
    }

    setFourRandomColours(colours);
  }, [grid]);

  return (
    <div className={styles.colourSelector}>
      <div className={styles.coloursContainer}>
        {fourRandomColours.map(colour => (
          <div key={colour.ref}>
            <button
              className={styles.colourSquare}
              style={{ backgroundColor: colour.hex }}
              onClick={() => onColourSelect(colour)}
            />
            <div className={styles.colourText}>{colour.ref}</div>
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <Input
          label='Type a single-worded clue'
          name='clue'
          placeholder='Enter your clue'
          onChange={handleOnChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button text='Submit' onClick={handleOnClick} />
      </div>
    </div>
  );
};

type Props = {
  onColourSelect: (colour: Square) => void;
};
export default ColourSelector;
