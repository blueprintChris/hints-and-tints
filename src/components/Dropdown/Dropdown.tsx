import { ChangeEvent } from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({ onChange }: Props) => {
  return (
    <select
      className={styles.dropdown}
      id='scoreLimit'
      name='scoreLimit'
      defaultValue={50}
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
};

export default Dropdown;
