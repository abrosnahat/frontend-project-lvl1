import game from '../engine';
import random from '../random';

const description = 'Find the greatest common divisor of given numbers.';

const res = () => {
  const rand1 = random(100);
  const rand2 = random(100);

  const question = `${rand1} ${rand2}`;

  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const correctAnswer = String(gcd(rand1, rand2));

  return { question, correctAnswer };
};

export default () => game(description, res);
