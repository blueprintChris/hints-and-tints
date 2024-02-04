import { useContext, useEffect, useState } from 'react';
import styles from './LargeCardModal.module.css';
import { GameContext } from '../../context/GameContext';
import { Square } from '../../constants/board';
import randomNumberFromRange from '../../utils/randomNumber';

const LargeCardModal = ({ isShowing }: Props) => {
  const [fourRandomColours, setFourRandomColours] = useState<Square[]>([]);

  const { grid } = useContext(GameContext);

  const handleClick = (colour: Square) => {};

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
    isShowing && (
      <div className={styles.modal}>
        <h1 className={styles.modalTitle}>Select a colour</h1>
        <div className={styles.largeCard}>
          <div className={styles.coloursContainer}>
            {fourRandomColours.map(colour => (
              <div>
                <button
                  className={styles.colourSquare}
                  style={{ backgroundColor: colour.hex }}
                  onClick={() => handleClick(colour)}
                />
                <div className={styles.colourText}>{colour.ref}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

type Props = {
  isShowing: boolean;
};

export default LargeCardModal;
