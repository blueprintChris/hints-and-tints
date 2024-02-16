import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Square } from '../../../../../constants/board';
import { getContrastRatio, hexToRgb } from '../../../../../utils';
import { Colours } from '../../../../../constants';
import styles from './Hints.module.css';

const Hints = ({ isHinter, firstHint, secondHint, selectedColour }: Props) => {
  const [textColour, setTextColour] = useState(Colours.WHITE);

  useEffect(() => {
    const applyColourRatio = () => {
      const rgb = hexToRgb(selectedColour?.hex);
      const rgbText = hexToRgb(Colours.WHITE);

      if (rgb && rgbText) {
        const contrastRatio = getContrastRatio(rgb, rgbText);
        setTextColour(contrastRatio < 3 ? Colours.BLACK : Colours.WHITE);
      }
    };

    applyColourRatio();
  }, [selectedColour?.hex]);

  return (
    <div className={styles.hintWrapper}>
      <h1>{isHinter ? 'Your Hints' : 'Hints'}</h1>
      <div
        className={classnames(styles.hintContainer, {
          [styles.hintContainerHinter]: isHinter,
        })}
      >
        <div className={classnames(styles.textWrapper, { [styles.textWrapperHinter]: isHinter })}>
          {firstHint && <h2 className={styles.firstHint}>{firstHint}</h2>}
          {secondHint && <h2 className={styles.secondHint}>{secondHint}</h2>}
        </div>
        {isHinter && (
          <div
            className={styles.tint}
            style={{ backgroundColor: selectedColour?.hex, color: textColour }}
          >
            <span>{selectedColour?.ref}</span>
          </div>
        )}
      </div>
    </div>
  );
};

type Props = {
  isHinter: boolean;
  firstHint?: string;
  secondHint?: string;
  selectedColour?: Square | null;
};
export default Hints;
