import game from '../engine';

const description = 'Find the greatest common divisor of given numbers.';

const res = () => {
  const rand1 = Math.floor(Math.random() * 101);
  const rand2 = Math.floor(Math.random() * 101);

  const question = `${rand1} ${rand2}`;

  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const correctAnswer = String(gcd(rand1, rand2));

  return { question, correctAnswer };
};

export default () => game(description, res);
