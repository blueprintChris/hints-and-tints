import classnames from 'classnames';
import { socket } from '../../socket/Socket';
import styles from './DisconnectedApp.module.css';

const DisconnectedApp = () => {
  const handleOnClick = () => {
    socket.connect();
  };
  return (
    <div className={styles.disconnectedContainer}>
      <div className={styles.disconnectedContent}>
        <div className={styles.disconnectedTitleWrapper}>
          <h1 className={styles.disconnectedTitle}>
            <span className={styles.textTypeA}>Ti</span>
            <span className={styles.textTypeB}>N</span>
            <span className={styles.textTypeA}>TS</span>
          </h1>
          <div className={classnames(styles.textTypeA, styles.separator)}>&</div>
          <h1 className={styles.disconnectedTitle}>
            <span className={styles.textTypeC}>H</span>
            <span className={styles.textTypeB}>i</span>
            <span className={styles.textTypeA}>N</span>
            <span className={styles.textTypeB}>T</span>
            <span className={styles.textTypeC}>S</span>
          </h1>
        </div>
        <div className={styles.nameInputContainer}>
          <label className={styles.nameInputLabel} htmlFor='nameInput'>
            Enter your name
          </label>
          <input className={styles.nameInput} type='text' />
          <button className={styles.nameInputButton} onClick={handleOnClick}>
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisconnectedApp;
