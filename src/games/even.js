import game from '../engine';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const res = () => {
  const question = Math.floor(Math.random() * 101);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => game(description, res);
