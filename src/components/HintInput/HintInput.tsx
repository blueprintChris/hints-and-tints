import { FormEvent, useState } from 'react';
import styles from './HintInput.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Square } from '../../constants/board';

const HintInput = ({ selectedColour }: Props) => {
  const [secondHint, setSecondHint] = useState('');

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    setSecondHint(e.currentTarget.value);
  };

  const handleOnClick = () => {};

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
