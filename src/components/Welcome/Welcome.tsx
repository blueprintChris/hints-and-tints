import { useContext } from 'react';
import { GameContext } from '../../context';
import { Input, Title } from '../../components';
import Setup from './Setup/Setup';
import styles from './Welcome.module.css';

const Welcome = () => {
  const { roomId } = useContext(GameContext);

  const shareUrl = `https://tints-and-hints.com/room/${roomId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div className={styles.welcome}>
      <Title size={20} orientation='column' />
      <h1 className={styles.welcomeHeader}>Play with your friends</h1>
      <Setup />
      <div className={styles.linkContainer}>
        <Input
          name='link'
          label='Copy the link below and send to your friends'
          withButton
          onChange={() => {}}
          onButtonClick={handleCopy}
          placeholder=''
          autoFocus={false}
          value={shareUrl}
        />
      </div>
    </div>
  );
};

export default Welcome;
