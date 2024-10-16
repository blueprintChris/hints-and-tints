import { Player } from '../../../types/Players';
import styles from './PlayerContent.module.css';

const PlayerContent = ({ player }: Props) => {
  return <div className={styles.dropdownContent}>some content</div>;
};

type Props = {
  player?: Player;
};

export default PlayerContent;
