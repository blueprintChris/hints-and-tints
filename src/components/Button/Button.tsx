import styles from './Button.module.css';

const Button = ({ text, onClick, colour, disabled }: Props) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{ backgroundColor: colour }}
      disabled={disabled}
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
};

export default Button;
