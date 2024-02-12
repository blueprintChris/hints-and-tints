import { FormEvent, useContext, useEffect, useState } from 'react';
import styles from './HintInput.module.css';
import { Button, Input } from '../../components';
import { socket } from '../../socket/Socket';
import { GameContext } from '../../context';
import { getContrastRatio, hexToRgb } from '../../utils/getContrastRatio';
import { Colours, GameStates, SocketEvents } from '../../constants';
import { Square } from '../../constants/board';

const HintInput = ({ selectedColour }: Props) => {
  const [secondHint, setSecondHint] = useState('');
  const [textColour, setTextColour] = useState(Colours.WHITE);

  const { roomId } = useContext(GameContext);

  useEffect(() => {
    const applyColourRatio = () => {
      const rgb = hexToRgb(selectedColour?.hex);
      const rgbText = hexToRgb(Colours.BLACK);

      if (rgb && rgbText) {
        const contrastRatio = getContrastRatio(rgb, rgbText);
        setTextColour(contrastRatio < 3 ? Colours.WHITE : Colours.BLACK);
      }
    };

    applyColourRatio();
  }, [selectedColour?.hex]);

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    setSecondHint(e.currentTarget.value);
  };

  const handleOnClick = () => {
    socket.emit(SocketEvents.GAME_ROUND_CONTINUE, {
      roomId,
      secondHint,
      gameState: GameStates.GUESSING_TWO,
    });
  };

  return (
    <div className={styles.hintInput}>
      <div className={styles.colourContainer}>
        <div
          className={styles.colour}
          style={{ backgroundColor: selectedColour?.hex, color: textColour }}
        >
          <h2>{selectedColour?.ref}</h2>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <Input
          name='secondHint'
          onChange={handleOnChange}
          placeholder='Enter a second hint'
          label=''
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={handleOnClick} text='Submit' />
      </div>
    </div>
  );
};

type Props = {
  selectedColour: Square | null;
};

export default HintInput;
