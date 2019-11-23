import game from '../engine';
import random from '../random';

const description = 'What is the result of the expression?';
const operators = '+-*';

const getData = () => {
  const random1 = random(0, 25);
  const random2 = random(0, 25);
  const operatorRandom = operators[random(0, operators.length)];

  const question = `${random1} ${operatorRandom} ${random2}`;

  let correctAnswer;
  switch (operatorRandom) {
    case '+': correctAnswer = String(random1 + random2);
      break;
    case '-': correctAnswer = String(random1 - random2);
      break;
    case '*': correctAnswer = String(random1 * random2);
      break;
    default:
      break;
  }
  return { question, correctAnswer };
};

export default () => game(description, getData);
