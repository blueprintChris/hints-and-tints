import { FormEvent } from 'react';
import styles from './Input.module.css';

const Input = ({ onChange, placeholder, name, label }: Props) => {
  return (
    <>
      <label className={styles.nameInputLabel} htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className={styles.nameInput}
        type='text'
        onChange={onChange}
        autoFocus
        placeholder={placeholder}
      />
    </>
  );
};

type Props = {
  label: string;
  name: string;
  placeholder: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
};

export default Input;
