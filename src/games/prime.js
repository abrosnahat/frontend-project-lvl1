import game from '../engine';
import random from '../random';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0 && number > 2) {
      return false;
    }
  }
  return true;
};

const getData = () => {
  const question = random(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => game(description, getData);
