import styles from './Button.module.css';

const Button = ({ text, onClick }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

type Props = {
  text: string;
  onClick: () => void;
};

export default Button;
