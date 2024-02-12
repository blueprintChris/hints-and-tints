import styles from './Toast.module.css';

const Toast = ({ message }: Props) => {
  return <div className={styles.toast}></div>;
};

type Props = {
  message: string;
};

export default Toast;
