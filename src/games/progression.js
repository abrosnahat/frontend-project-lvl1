import game from '../engine';
import random from '../random';

const description = 'What number is missing in the progression?';

const res = () => {
  const rand1 = random(10);
  const rand2 = random(9);
  const d = random(6) + 1;
  let str = '';
  let correctAnswer = 0;
  const prog = (r) => {
    for (let i = 0; i < 10; i += 1) {
      if (rand2 === i) {
        correctAnswer = String(r + i * d);
        str += '.. ';
      } else {
        str += `${r + i * d} `;
      }
    }
  };
  prog(rand1);
  const question = str;

  return { question, correctAnswer };
};

export default () => game(description, res);
