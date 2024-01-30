import React from 'react';
import squares from '../../constants/squares';
import styles from './GameBoard.module.css';

// function nextLetter(s: string) {
//   return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function (a) {
//     var c = a.charCodeAt(0);
//     switch (c) {
//       case 90:
//         return 'A';
//       case 122:
//         return 'a';
//       default:
//         return String.fromCharCode(++c);
//     }
//   });
// }

// const generateRows = () => {
//   let startingLetter = 'Z';
//   const rows = [];

//   for (let j = 1; j <= 16; j++) {
//     const arr: Array<Square> = [];

//     startingLetter = nextLetter(startingLetter);

//     for (let i = 1; i <= 30; i++) {
//       arr.push({
//         ref: `${startingLetter}${i}`,
//         hex: '',
//       });
//     }

//     rows.push(arr);
//   }

//   return rows;
// };

const generateGrid = () => {
  return squares.map(row =>
    row.map(square => (
      <button className={styles.square} style={{ backgroundColor: square.hex || 'white' }}>
        {square.ref}
      </button>
    ))
  );
};

const GameBoard = () => {
  return <div className={styles.gameboard}>{generateGrid()}</div>;
};

export default GameBoard;
