import { HTMLAttributes, PropsWithChildren } from 'react';
import classnames from 'classnames';
import styles from './Button.module.css';

const Button = ({
  text,
  onClick,
  colour,
  disabled,
  withInput,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={classnames(styles.button, { [styles.withInput]: withInput })}
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
  withInput?: boolean;
};

export default Button;
