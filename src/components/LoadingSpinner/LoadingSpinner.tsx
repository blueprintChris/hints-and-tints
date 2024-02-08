import { GridLoader } from 'react-spinners';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ colour, text }: Props) => {
  return (
    <div className={styles.loadingSpinner}>
      <h2>{text}</h2>
      <GridLoader color={colour} />
    </div>
  );
};

type Props = {
  colour: string;
  text: string;
};

export default LoadingSpinner;
