import styles from './Setup.module.css';

const Setup = () => {
  return (
    <div className={styles.setup}>
      <h2>Setup the game</h2>
      <div className={styles.setupContent}>
        <img src='/images/logo.png' alt='logo' />
        <div className={styles.setupText}>
          <p>Tints & Hints is a game for 2+ players.</p>
          <p>
            Take it in turns as the Hinter & Tinter to provide clues and guess the correct colour.
          </p>
          <p>Set a score limit for the game before starting.</p>
          <p>
            <b>The player who reaches the score limit first wins!</b>
          </p>
          <p>For more details, check out the rules.</p>
        </div>
      </div>
    </div>
  );
};

export default Setup;
