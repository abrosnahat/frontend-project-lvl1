import game from '../engine';

const description = 'What number is missing in the progression?';

const res = () => {
  const rand1 = Math.ceil(Math.random() * 10);
  const rand2 = Math.ceil(Math.random() * 9);
  const d = Math.ceil(Math.random() * 6);
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
