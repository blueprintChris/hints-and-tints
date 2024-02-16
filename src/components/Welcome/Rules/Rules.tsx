import Button from '../../Button/Button';
import styles from './Rules.module.css';

const Rules = ({ canClose, onClose = () => {} }: Props) => {
  return (
    <div className={styles.rules}>
      <h2>How to play</h2>
      <ol>
        <li>
          <span>
            Each round, the current Hinter will choose a colour and provide the rest of the players
            with a single-worded hint. The hint cannot contain any names of colours or any
            references to the game board. The current Hinter rotates each round.
          </span>
        </li>
        <li>
          <span>Tinters will take it in turns to guess which colour the Hinter has selected.</span>
        </li>
        <li>
          <span>
            Once every Tinter has chosen a colour, the Hinter will then provide a 2nd hint to the
            rest of the players. Tinters will get an opportunity to make a another guess. Turn order
            this time is reversed.
          </span>
        </li>
        <li>
          <span>
            Once all guesses have been made, scoring will commence. Scores are applied as follows:
          </span>
        </li>
        <ul>
          <li>
            <span>3 points to the person who guesses the Hinter's exact colour.</span>
          </li>
          <li>
            <span>
              2 points to each person (per guess) who guesses 1 square outside the Hinter's colour.
            </span>
          </li>
          <li>
            <span>
              1 point to each player (per guess) who guesses 2 squares outside the Hinter's colour.
            </span>
          </li>
          <li>
            <span>
              The Hinter gets 1 point for every player that scores 2 points or more on a single
              guess.
            </span>
          </li>
        </ul>
        <li>
          <span>The game ends when a player wins by reaching the score limit.</span>
        </li>
      </ol>
      {canClose && (
        <div className={styles.buttonWrapper}>
          <Button onClick={onClose} text='Close' />{' '}
        </div>
      )}
    </div>
  );
};

type Props = {
  onClose?: () => void;
  canClose?: boolean;
};

export default Rules;
