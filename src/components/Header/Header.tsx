import { Button, Title } from '../../components';
import styles from './Header.module.css';

const Header = ({ name, scoreLimit, onClick }: Props) => {
  return (
    <div className={styles.header}>
      <Title size={8} orientation='row' />
      <div className={styles.playerWrapper}>
        <span>Hey {name},&nbsp;</span>
        <span>
          the score to reach is: <span className={styles.scoreLimit}>{scoreLimit}</span>
        </span>
      </div>
      <div className={styles.buttonWrapper}>
        <Button text='Rules' onClick={onClick} />
      </div>
    </div>
  );
};

type Props = {
  name: string;
  scoreLimit: number;
  onClick: () => void;
};

export default Header;
