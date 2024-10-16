import Button from '../../Button/Button';
import styles from './Rules.module.css';

const Rules = ({ onClose = () => {} }: Props) => {
  return (
    <div className={styles.rules}>
      <h2>How to play</h2>
      <ol>
        <li>
          <span>
            Tints & Hints is a game about guessing colours based on the provided clues. There are 2
            roles: <b className={styles.rulesHinter}>Hinter</b> and{' '}
            <b className={styles.rulesTinter}>Tinter</b>.
          </span>
        </li>
        <li>
          <span>
            The role of the <b className={styles.rulesHinter}>Hinter</b> is to provide the rest of
            the players with a single-worded clue for a specfic colour on the board. The role of the{' '}
            <b className={styles.rulesTinter}>Tinter</b> is to guess a colour on the board based on
            the given clue.
          </span>
        </li>
        <li>
          <span>
            When the game starts, the <b className={styles.rulesHinter}>Hinter</b> will be given the
            opportunity to select a colour from a choice of 4 colours. This colour will be the
            selected colour for the rest of the round.
          </span>
        </li>
        <li>
          <span>
            When a colour has been selected by the <b className={styles.rulesHinter}>Hinter</b>, the
            round will begin and the first <b className={styles.rulesTinter}>Tinter</b> will choose
            a colour on the game board which they think is the colour picked by the{' '}
            <b className={styles.rulesHinter}>Hinter</b>{' '}
          </span>
        </li>
        <li>
          <span>
            Once every <b className={styles.rulesTinter}>Tinter</b> has chosen a colour, the{' '}
            <b className={styles.rulesHinter}>Hinter</b> will then provide a 2nd hint to the rest of
            the players. <b className={styles.rulesTinter}>Tinters</b> will get an opportunity to
            make a another guess. Turn order this time is reversed.
          </span>
        </li>
        <li>
          <span>
            Once every <b className={styles.rulesTinter}>Tinter</b> has made 2 guesses, scoring will
            commence. Scores are applied as follows:
          </span>
        </li>
        <ul>
          <li>
            <span>
              3 points to the <b className={styles.rulesTinter}>Tinter</b> who guesses the{' '}
              <b className={styles.rulesHinter}>Hinter's</b> <b>exact</b> colour.
            </span>
          </li>
          <li>
            <span>
              2 points for each guess a <b className={styles.rulesTinter}>Tinter</b> makes that is 1
              square outside the <b className={styles.rulesHinter}>Hinter's</b> colour.
            </span>
          </li>
          <li>
            <span>
              1 point for each guess a <b className={styles.rulesTinter}>Tinter</b> makes that is 2
              squares outside the <b className={styles.rulesHinter}>Hinter's</b> colour.
            </span>
          </li>
          <li>
            <span>
              The <b className={styles.rulesHinter}>Hinter</b> gets 1 point for every player that
              scores 2 points or more on a single guess.
            </span>
          </li>
        </ul>
        <li>
          <span>The game ends when a player wins by reaching the score limit.</span>
        </li>
      </ol>
      <div className={styles.buttonWrapper}>
        <Button onClick={onClose} text='Close' />{' '}
      </div>
    </div>
  );
};

type Props = {
  onClose?: () => void;
};

export default Rules;
