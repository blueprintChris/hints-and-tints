import classnames from 'classnames';
import styles from './Title.module.css';

const Title = ({ size, orientation = 'column' }: Props) => {
  return (
    <div
      className={styles.titleContainer}
      style={{ fontSize: `${size}px`, flexDirection: orientation }}
    >
      <h1 className={styles.title}>
        <span className={styles.textTypeB}>Ti</span>
        <span className={styles.textTypeC}>N</span>
        <span className={styles.textTypeA}>TS</span>
      </h1>
      <div
        className={classnames(styles.textTypeA, { [styles.separator]: orientation === 'column' })}
        style={{ fontSize: `${size}px`, margin: orientation === 'row' ? '0 6px' : '0' }}
      >
        &
      </div>
      <h1 className={styles.title}>
        <span className={styles.textTypeC}>H</span>
        <span className={styles.textTypeB}>i</span>
        <span className={styles.textTypeA}>N</span>
        <span className={styles.textTypeB}>T</span>
        <span className={styles.textTypeC}>S</span>
      </h1>
    </div>
  );
};

type Props = {
  size: number;
  orientation?: 'column' | 'row';
};

export default Title;
