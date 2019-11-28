import game from '../engine';
import random from '../random';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;

const getProgression = (start, number) => {
  const result = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    result.push(start + number * i);
  }
  return result;
};

const getData = () => {
  const firstMember = random(1, 10);
  const randomHiddenElement = random(1, lengthProgression - 1);
  const step = random(1, 6);
  const progression = getProgression(firstMember, step);

  const correctAnswer = progression.splice(randomHiddenElement, 1, '..').toString();
  const question = progression.join(' ');

  return { question, correctAnswer };
};

export default () => game(description, getData);
