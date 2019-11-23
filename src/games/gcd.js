import game from '../engine';
import random from '../random';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (b === 0) return a;
  return findGcd(b, a % b);
};

const getData = () => {
  const random1 = random(0, 100);
  const random2 = random(0, 100);

  const question = `${random1} ${random2}`;

  const correctAnswer = String(findGcd(random1, random2));

  return { question, correctAnswer };
};

export default () => game(description, getData);
