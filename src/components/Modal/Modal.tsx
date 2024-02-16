import { PropsWithChildren, useEffect, useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ title, subTitle, children, duration, isPermanent }: PropsWithChildren<Props>) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (duration) {
      setShowModal(true);
      const timer = setTimeout(() => {
        setShowModal(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  return (
    (isPermanent || showModal) && (
      <div className={styles.modal}>
        <div className={styles.titleWrapper}>
          {title && <h1 className={styles.modalTitle}>{title}</h1>}
          {subTitle && <h2 className={styles.modalSubTitle}>{subTitle}</h2>}
        </div>
        {children}
      </div>
    )
  );
};

type Props = {
  title?: string;
  subTitle?: string;
  duration?: number;
  isPermanent?: boolean;
};

export default Modal;
