import { FormEvent, useState } from 'react';
import classnames from 'classnames';
import { socket } from '../../socket/Socket';
import styles from './DisconnectedApp.module.css';
import { Title } from '../../components';

const DisconnectedApp = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleOnClick = () => {
    if (inputValue) {
      socket.connect();
    } else {
      alert('Please enter a name');
    }
  };

  return (
    <div className={styles.disconnectedContainer}>
      <div className={styles.disconnectedContent}>
        <div className={styles.titleWrapper}>
          <Title size={40} />
        </div>
        <div className={styles.nameInputContainer}>
          <label className={styles.nameInputLabel} htmlFor='nameInput'>
            To create a room, enter a nickname
          </label>
          <input
            className={styles.nameInput}
            type='text'
            onChange={handleInputChange}
            autoFocus
            placeholder='Enter your nickname'
          />
          <button className={styles.nameInputButton} onClick={handleOnClick}>
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisconnectedApp;