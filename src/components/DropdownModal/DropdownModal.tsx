import { PropsWithChildren, useEffect, useRef } from 'react';
import classnames from 'classnames';

import styles from './DropdownModal.module.css';

const DropdownModal = ({ children, isShowing, side, onClose }: PropsWithChildren<Props>) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (modalRef.current && !modalRef.current.contains(target)) {
        onClose();
      }
    };
    if (isShowing) {
      // Use setTimeout to delay adding the event listener
      const timeoutId = setTimeout(() => {
        window.addEventListener('click', handleOutsideClick);
      }, 0);

      return () => {
        clearTimeout(timeoutId); // Clean up the timeout
        window.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [isShowing, onClose]);

  if (!isShowing) return null;

  return (
    <div
      className={classnames(styles.dropdownModal, {
        [styles.left]: side === 'left',
        [styles.right]: side === 'right',
        [styles.enter]: isShowing,
        [styles.exit]: !isShowing,
      })}
      ref={modalRef}
    >
      {children}
    </div>
  );
};

type Props = {
  isShowing?: boolean;
  side: 'left' | 'right';
  onClose: () => void;
};

export default DropdownModal;
