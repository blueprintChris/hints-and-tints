import React, { PropsWithChildren } from 'react';
import { Square } from '../../constants/board';
import styles from './Tooltip.module.css';
import { createPortal } from 'react-dom';

const Tooltip = ({ children, offset = { x: 0, y: 0 }, square, text }: PropsWithChildren<Props>) => {
  const [show, setShow] = React.useState(false);
  const [{ clientX, clientY }, setCoordinates] = React.useState<{
    clientX: number;
    clientY: number;
  }>({ clientX: 0, clientY: 0 });

  return (
    <>
      {React.cloneElement(children, {
        onMouseEnter: () => setShow(true),
        onMouseLeave: () => setShow(false),
        onMouseMove: (e: MouseEvent) => setCoordinates(e),
      })}
      {createPortal(
        show && (
          <div
            className={styles.tooltip}
            style={{
              transform: `translate(${clientX + offset.x}px, ${clientY + offset.y}px)`,
            }}
          >
            <div className={styles.textWrapper}>
              <span>{square?.ref}</span>
              {text && <span className={styles.text}>{text}</span>}
            </div>
          </div>
        ),
        document.body
      )}
    </>
  );
};

type Props = {
  children: React.ReactElement;
  offset?: { x: number; y: number };
  square?: Square;
  text?: string;
};

export default Tooltip;
