import { FormEvent } from 'react';
import classnames from 'classnames';
import styles from './Input.module.css';
import Button from '../Button/Button';

const Input = ({
  onChange,
  placeholder,
  name,
  label,
  withButton,
  onButtonClick,
  value,
  disabled,
  autoFocus = true,
  defaultValue,
}: Props) => {
  return (
    <div className={styles.inputContainer}>
      {label && (
        <label className={styles.nameInputLabel} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={classnames({ [styles.inputButtonWrapper]: withButton })}>
        <input
          name={name}
          className={classnames(styles.nameInput, { [styles.withButton]: withButton })}
          type='text'
          onChange={onChange}
          autoFocus={autoFocus}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
        />
        {withButton && (
          <div className={styles.buttonWrapper}>
            <Button text='📋' onClick={onButtonClick ? onButtonClick : () => {}} withInput />
          </div>
        )}
      </div>
    </div>
  );
};

type Props = {
  label?: string;
  name: string;
  placeholder: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
  disabled?: boolean;
  withButton?: boolean;
  value?: string;
  autoFocus?: boolean;
  defaultValue?: string;
};

export default Input;
