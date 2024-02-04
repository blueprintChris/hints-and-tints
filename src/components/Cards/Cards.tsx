import * as React from 'react';
import styles from './Cards.module.css';
import randomNumberFromRange from '../../utils/randomNumber';

const cards = Array.from({ length: 10 });

const Cards = ({ onClick }: Props) => {
  return (
    <div className={styles.cardStack}>
      {cards.map((_, idx) => {
        const rotation = randomNumberFromRange(1, 2);

        return (
          <div
            className={styles.card}
            key={idx}
            style={{
              top: randomNumberFromRange(0, 10),
              left: randomNumberFromRange(0, 10),
              transform: `rotate(${idx % 2 === 0 ? '-' : ''}${rotation}deg)`,
            }}
          >
            {idx === cards.length - 1 && (
              <button className={styles.card} onClick={onClick}>
                Hues & Clues
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

type Props = {
  onClick: () => void;
};

export default Cards;
