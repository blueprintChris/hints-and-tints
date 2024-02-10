import { Title } from '../../components';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.titleWrapper}>
        <Title size={20} orientation='column' />
        <h1 className={styles.welcomeHeader}>Play with your friends</h1>
      </div>
      <div className={styles.rules}>
        <h2>How to play</h2>
        <p>
          <span>1.</span>
          Select a role on the right-hand side. There's only 1 Hinter per round. Hinter will always
          go first. Click Start Game once everybody has selected.
        </p>
        <p>
          <span>2.</span>
          The job of the Hinter is to choose a colour and provide the rest of the players with a
          single-worded hint. The hint cannot contain any names of colours or any references to the
          game board.
        </p>
        <p>
          <span>3.</span>
          The job of the Tinters is to guess which colour the Hinter has selected. Tinters must take
          it in turns to choose a colour on the game board.
        </p>
        <p>
          <span>4.</span>
          Once every Tinter has chosen a colour, the Hinter will then provide a 2nd hint to the rest
          of the players.
        </p>
        <p>
          <span>5.</span>
          Tinters will get another oppurtunity to guess a different colour. Turn order this time is
          reversed.
        </p>
        <p>
          <span>6.</span>
          Once all guesses have been made, scoring will commence. Scores are applied as follows:
        </p>
        <ul>
          <li>3 points to the person who guessed the Hinter's exact colour.</li>
          <li>
            2 points to each person (per guess) who guessed 1 square outside the Hinter's colour.
          </li>
          <li>
            1 point to each player (per guess) who guessed 2 squares outside the Hinter's colour.
          </li>
          <li>
            The Hinter gets 1 point for every player that scores 2 points or more on a single guess.
          </li>
        </ul>
        <p>
          <span>7.</span>The game ends when the score limit has been reached.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
