import { FormEvent, useEffect, useState } from 'react';
import { Button, Input, Title } from '../../components';
import styles from './NameInputPanel.module.css';
import Tooltip from '../Tooltip/Tooltip';

const NameInputPanel = ({
  onChange,
  onClick,
  buttonText,
  labelText,
  inputName,
  inputPlaceholder,
}: Props) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <div className={styles.content}>
      <Tooltip
        offset={{ x: 20, y: 20 }}
        text='For the best experience, play with a resolution of at least 1920 x 1080. 
        Lower resolutions are not supported and you may experience some funny behaviour.'
      >
        <button className={styles.help}>?</button>
      </Tooltip>

      <div className={styles.titleWrapper}>
        <Title size={40} />
      </div>
      <div className={styles.nameInputContainer}>
        <Input
          label={labelText}
          name={inputName}
          placeholder={inputPlaceholder}
          onChange={onChange}
        />
        <div className={styles.buttonWrapper}>
          <Button text={buttonText} onClick={onClick} />
        </div>
        {isMobile && (
          <div className={styles.mobileWarning}>
            <p>
              This game is <span>NOT</span> suitable for mobile and will <span>NOT WORK</span>.
              Please switch to desktop.
            </p>
            <span>You have been warned.</span>
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
};

export default NameInputPanel;
