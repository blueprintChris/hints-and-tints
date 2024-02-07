import { PropsWithChildren } from 'react';
import styles from './Modal.module.css';

const Modal = ({ title, subTitle, children }: PropsWithChildren<Props>) => {
  return (
    <div className={styles.modal}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.modalTitle}>{title}</h1>
        {subTitle && <h2 className={styles.modalSubTitle}>{subTitle}</h2>}
      </div>
      {children}
    </div>
  );
};

type Props = {
  title: string;
  subTitle?: string;
};

export default Modal;
