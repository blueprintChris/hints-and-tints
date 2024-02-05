import { FormEvent } from 'react';
import { Button, Title } from '../../components';
import styles from './NameInputPanel.module.css';

const NameInputPanel = ({
  onChange,
  onClick,
  buttonText,
  labelText,
  inputName,
  inputPlaceholder,
}: Props) => {
  return (
    <div className={styles.content}>
      <div className={styles.titleWrapper}>
        <Title size={40} />
      </div>
      <div className={styles.nameInputContainer}>
        <label className={styles.nameInputLabel} htmlFor={inputName}>
          {labelText}
        </label>
        <input
          name={inputName}
          className={styles.nameInput}
          type='text'
          onChange={onChange}
          autoFocus
          placeholder={inputPlaceholder}
        />
        <div className={styles.buttonWrapper}>
          <Button text={buttonText} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

type Props = {
  buttonText: string;
  labelText: string;
  inputName: string;
  inputPlaceholder: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

export default NameInputPanel;
