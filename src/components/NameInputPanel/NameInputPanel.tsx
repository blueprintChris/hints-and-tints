import { FormEvent } from 'react';
import { Button, Input, Title } from '../../components';
import styles from './NameInputPanel.module.css';
import Tooltip from '../Tooltip/Tooltip';
import { useDeviceWidth } from '../../hooks';

const NameInputPanel = ({
  onChange,
  onClick,
  handleScroll,
  buttonText,
  labelText,
  inputName,
  inputPlaceholder,
  defaultValue,
  isHome,
}: Props) => {
  const { isMobile } = useDeviceWidth();

  return (
    <div className={styles.content}>
      <Tooltip
        offset={{ x: -420, y: -90 }}
        text='For the best experience, play with a resolution of at least 1920 x 1080. 
        Lower resolutions are not supported and you may experience some funny behaviour.'
      >
        <button className={styles.help}>?</button>
      </Tooltip>
      <div className={styles.titleWrapper}>
        <Title size={40} />
        <h1 className={styles.welcomeHeader}>Play with your friends</h1>
      </div>
      <div className={styles.nameInputContainer}>
        <Input
          label={labelText}
          name={inputName}
          placeholder={inputPlaceholder}
          onChange={onChange}
          defaultValue={defaultValue}
        />
        <div className={styles.buttonWrapper}>
          <Button text={buttonText} onClick={onClick} />
        </div>
        {isHome && (
          <div className={styles.buttonWrapperLink}>
            <Button
              text='How to play'
              onClick={handleScroll ? handleScroll : () => {}}
              type='link'
            />
          </div>
        )}
        {isMobile && (
          <div className={styles.mobileWarning}>
            <p>
              This game is <span>not yet configured</span> for mobile devices. It is
              <span>strongly recommended</span> that you use a desktop device to play this game.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

type Props = {
  buttonText: string;
  labelText: string;
  inputName: string;
  inputPlaceholder: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  onClick: () => void;
  handleScroll?: () => void;
  defaultValue?: string;
  isHome?: boolean;
};

export default NameInputPanel;
