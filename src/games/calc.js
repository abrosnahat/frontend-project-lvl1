import game from '../engine';
import random from '../random';

const description = 'What is the result of the expression?';
const operators = '+-*';

const res = () => {
  const rand1 = random(25);
  const rand2 = random(25);
  const operatorRand = operators[random(operators.length)];

  const question = `${rand1} ${operatorRand} ${rand2}`;

  let correctAnswer = 0;
  switch (operatorRand) {
    case '+': correctAnswer = String(rand1 + rand2);
      break;
    case '-': correctAnswer = String(rand1 - rand2);
      break;
    case '*': correctAnswer = String(rand1 * rand2);
      break;
    default:
      break;
  }
  return { question, correctAnswer };
};

export default () => game(description, res);
