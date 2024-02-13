import { Title } from '../../components';
import styles from './Header.module.css';

const Header = ({ name, scoreLimit }: Props) => {
  return (
    <div className={styles.header}>
      <Title size={8} orientation='row' />
      <div className={styles.playerWrapper}>
        <span>Hey {name},&nbsp;</span>
        <span>the score to reach is: {scoreLimit}</span>
      </div>
    </div>
  );
};

type Props = {
  name: string;
  scoreLimit: number;
};

export default Header;
