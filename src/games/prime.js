import game from '../engine';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const res = () => {
  const rand1 = Math.ceil(Math.random() * 101);

  const isPrime = (num) => {
    let x = 0;
    for (let i = 0; i <= num; i += 1) {
      if (num % i === 0) x += 1;
    }
    if (x === 2) return 'yes';
    return 'no';
  };
  const correctAnswer = isPrime(rand1);

  const question = rand1;

  return { question, correctAnswer };
};

export default () => game(description, res);
