import game from '../engine';
import random from '../random';

const description = 'What number is missing in the progression?';

const getProgression = (start, number) => {
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push(start + number * i);
  }
  return result;
};

const getData = () => {
  const random1 = random(1, 10);
  const random2 = random(1, 9);
  const step = random(1, 6);
  const progression = getProgression(random1, step);

  const hiddenElement = progression.splice(random2, 1, '..');
  const question = progression.join(' ');

  const correctAnswer = hiddenElement.toString();

  return { question, correctAnswer };
};

export default () => game(description, getData);
