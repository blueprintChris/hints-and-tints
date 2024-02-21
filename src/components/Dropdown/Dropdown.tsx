import { ChangeEvent } from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({ onChange, defaultValue }: Props) => {
  return (
    <select
      className={styles.dropdown}
      id='scoreLimit'
      name='scoreLimit'
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {Array.from({ length: 60 }).map((_, idx) => (
        <option value={idx + 5} key={idx}>
          {idx + 5}
        </option>
      ))}
    </select>
  );
};

type Props = {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: number;
};

export default Dropdown;
