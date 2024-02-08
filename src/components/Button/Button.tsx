import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.css';

const Button = ({ text, onClick, colour, disabled, ...rest }: PropsWithChildren<Props>) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{ backgroundColor: colour }}
      disabled={disabled}
      {...rest}
    >
      {text}
    </button>
  );
};

type Props = {
  text: string;
  onClick: () => void;
  colour?: string;
  disabled?: boolean;
  rest?: HTMLAttributes<HTMLButtonElement>;
};

export default Button;
