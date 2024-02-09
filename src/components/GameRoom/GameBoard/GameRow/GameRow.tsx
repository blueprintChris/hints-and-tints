import { PropsWithChildren } from 'react';
import styles from './GameRow.module.css';

const GameRow = ({ row, children }: PropsWithChildren<Props>) => {
  return (
    <div className={styles.row} data-content={row}>
      {children}
    </div>
  );
};

type Props = {
  row: string;
};

export default GameRow;
