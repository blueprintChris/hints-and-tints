import { PropsWithChildren, RefObject, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import styles from './DropdownModal.module.css';

const useOutsideAlerterRef = (initialIsVisible: boolean) => {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (ref.current && !ref.current.contains(target)) {
        setIsVisible(false);
      }
    };
    // Bind the event listener
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return { ref, isVisible, setIsVisible };
};

const DropdownModal = ({ children, isShowing, side }: PropsWithChildren<Props>) => {
  const { ref, isVisible, setIsVisible } = useOutsideAlerterRef(false);

  useEffect(() => {
    if (isShowing) {
      setIsVisible(true);
    }
  }, [isShowing, setIsVisible]);

  const onAnimationEnd = () => {
    if (!isShowing) setIsVisible(false);
  };

  return (
    isVisible && (
      <div
        className={classnames(styles.dropdownModal, {
          [styles.left]: side === 'left',
          [styles.right]: side === 'right',
          [styles.enter]: isShowing,
          [styles.exit]: !isShowing,
        })}
        onAnimationEnd={onAnimationEnd}
        ref={ref}
      >
        {children}
      </div>
    )
  );
};

type Props = {
  isShowing?: boolean;
  side: 'left' | 'right';
};

export default DropdownModal;
