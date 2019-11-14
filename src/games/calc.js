import game from '../engine';

const description = 'What is the result of the expression?';

const res = () => {
  const rand1 = Math.floor(Math.random() * 26);
  const rand2 = Math.floor(Math.random() * 26);
  const oper = '+-*';
  const operRand = oper[Math.floor(Math.random() * 3)];

  const question = `${rand1} ${operRand} ${rand2}`;

  let correctAnswer = 0;
  if (operRand === '+') correctAnswer = String(rand1 + rand2);
  if (operRand === '-') correctAnswer = String(rand1 - rand2);
  if (operRand === '*') correctAnswer = String(rand1 * rand2);
  return { question, correctAnswer };
};

export default () => game(description, res);
