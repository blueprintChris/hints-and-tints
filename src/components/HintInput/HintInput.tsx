import { FormEvent, useContext, useState } from 'react';
import styles from './HintInput.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Square } from '../../constants/board';
import { socket } from '../../socket/Socket';
import { GameContext } from '../../context';

const HintInput = ({ selectedColour }: Props) => {
  const [secondHint, setSecondHint] = useState('');

  const { roomId } = useContext(GameContext);

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    setSecondHint(e.currentTarget.value);
  };

  const handleOnClick = () => {
    socket.emit('round-start-2', { roomId, secondHint, gameState: 'GUESSING_TWO' });
  };

  return (
    <div className={styles.hintInput}>
      <div className={styles.colourContainer}>
        <div className={styles.colour} style={{ backgroundColor: selectedColour?.hex }} />
      </div>
      <div className={styles.inputContainer}>
        <Input
          name='secondHint'
          onChange={handleOnChange}
          placeholder='Enter a second hint'
          label=''
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={handleOnClick} text='Submit' />
      </div>
    </div>
  );
};

type Props = {
  selectedColour: Square | null;
};

export default HintInput;
